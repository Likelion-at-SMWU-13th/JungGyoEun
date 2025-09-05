const kakaoApiKey = import.meta.env.VITE_KAKAO_APP_KEY;

const useKakaoShare = () => {
  const shareKakaoLocation = (center) => {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(kakaoApiKey);
    }

    window.Kakao.Share.sendDefault(
      {
        objectType: "location",
        address: `${center.lat}, ${center.lng}`,
        addressTitle: "내 위치",
        content: {
          title: "숙명여대 멋사 13기 프론트 실습",
          description: "나의 작고 소중한 위치를 공유합니다",
          imageUrl:
            "https://i.pinimg.com/1200x/97/ad/7d/97ad7d5b5514dc089ca66a9f3b75c882.jpg",
          link: {
            mobileWebUrl: "https://developers.kakao.com",
            webUrl: "https://developers.kakao.com",
          },
        },
        social: {
          likeCount: 286,
          commentCount: 45,
          sharedCount: 845,
        },
        buttons: [
          {
            title: "웹으로 보기",
            link: {
              mobileWebUrl: "http://localhost:5173/",
              webUrl: "http://localhost:5173/",
            },
          },
        ],
      },
      function (error) {
        console.log(error);
      }
    );
  };

  return { shareKakaoLocation };
};

export default useKakaoShare;
