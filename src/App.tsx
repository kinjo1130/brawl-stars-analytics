import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

// インターフェース定義
interface Item {
  id: string;
  key: string;
}

const App: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [selectedItems, setSelectedItems] = useState<Item[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const items: Item[] = [
    { id: 'apple', key: 'fruits.apple' },
    { id: 'banana', key: 'fruits.banana' },
    { id: 'orange', key: 'fruits.orange' },
    { id: 'grape', key: 'fruits.grape' },
    { id: 'melon', key: 'fruits.melon' },
    { id: 'strawberry', key: 'fruits.strawberry' },
    { id: 'pineapple', key: 'fruits.pineapple' },
    { id: 'peach', key: 'fruits.peach' },
    { id: 'kiwi', key: 'fruits.kiwi' },
    { id: 'mango', key: 'fruits.mango' }
  ];

  const handleSelect = (item: Item): void => {
    if (selectedItems.includes(item)) {
      const newSelection = selectedItems.filter(i => i !== item);
      setSelectedItems(newSelection);
      if (isModalOpen) {
        setIsModalOpen(false);
      }
    } else if (selectedItems.length < 3) {
      const newSelection = [...selectedItems, item];
      setSelectedItems(newSelection);
      if (newSelection.length === 3) {
        setIsModalOpen(true);
      }
    }
  };

  const handleBadgeClick = (item: Item): void => {
    const newSelection = selectedItems.filter(i => i !== item);
    setSelectedItems(newSelection);
    if (isModalOpen) {
      setIsModalOpen(false);
    }
  };

  const handleConfirm = (): void => {
    setIsModalOpen(false);
  };

  const handleCancel = (): void => {
    setSelectedItems(selectedItems.slice(0, -1));
    setIsModalOpen(false);
  };

  const toggleLanguage = (): void => {
    const newLang = i18n.language === 'ja' ? 'en' : 'ja';
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <button
        onClick={toggleLanguage}
        className="mb-4 px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
      >
        {i18n.language === 'ja' ? 'English' : '日本語'}
      </button>

      <div className="mb-6 p-4 bg-gray-50 rounded-lg shadow-sm">
        <h2 className="text-lg font-semibold mb-2">
          {t('selectedItems')} ({selectedItems.length} {t('outOf')} 3)
        </h2>
        <div className="flex flex-wrap gap-2">
          {selectedItems.map((item, index) => (
            <button
              key={index}
              onClick={() => handleBadgeClick(item)}
              className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium
                         hover:bg-blue-200 transition-colors duration-200 flex items-center gap-1"
            >
              {t(item.key)}
              <span className="text-xs ml-1">×</span>
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => handleSelect(item)}
            className={`
              p-3 rounded-lg transition-colors duration-200
              ${selectedItems.includes(item)
                ? 'bg-blue-500 text-white hover:bg-blue-600'
                : 'bg-gray-100 hover:bg-gray-200'
              }
              ${selectedItems.length >= 3 && !selectedItems.includes(item)
                ? 'opacity-50 cursor-not-allowed'
                : ''
              }
            `}
            disabled={selectedItems.length >= 3 && !selectedItems.includes(item)}
          >
            {t(item.key)}
          </button>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="mb-4">
              <h3 className="text-lg font-semibold">{t('selectionComplete')}</h3>
              <div className="mt-4">
                {t('selectedFollowing')}
                <ul className="list-disc pl-6 mt-2">
                  {selectedItems.map((item, index) => (
                    <li key={index} className="mt-1">{t(item.key)}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={handleCancel}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                {t('selectAgain')}
              </button>
              <button
                onClick={handleConfirm}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                {t('confirm')}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;