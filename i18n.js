import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      selectedItems: "Selected Items",
      outOf: "out of",
      selectionComplete: "Selection Complete",
      selectedFollowing: "You have selected the following items:",
      selectAgain: "Select Again",
      confirm: "Confirm",
      fruits: {
        apple: "Apple",
        banana: "Banana",
        orange: "Orange",
        grape: "Grape",
        melon: "Melon",
        strawberry: "Strawberry",
        pineapple: "Pineapple",
        peach: "Peach",
        kiwi: "Kiwi",
        mango: "Mango"
      }
    }
  },
  ja: {
    translation: {
      selectedItems: "選択されたアイテム",
      outOf: "/",
      selectionComplete: "選択完了",
      selectedFollowing: "以下の3つのアイテムを選択しました：",
      selectAgain: "選び直す",
      confirm: "確定",
      fruits: {
        apple: "りんご",
        banana: "バナナ",
        orange: "オレンジ",
        grape: "ぶどう",
        melon: "メロン",
        strawberry: "いちご",
        pineapple: "パイナップル",
        peach: "もも",
        kiwi: "キウイ",
        mango: "マンゴー"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "ja", // デフォルト言語
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;