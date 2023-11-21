import { styled } from 'styled-components';
import { Swiper } from 'swiper/react';
import NotoSansKR_Thin from '../../assets/fonts/NotoSansKR-Thin.ttf';
import NotoSansKR_Light from '../../assets/fonts/NotoSansKR-Light.ttf';
import NotoSansKR_Regular from '../../assets/fonts/NotoSansKR-Regular.ttf';
import NotoSansKR_Medium from '../../assets/fonts/NotoSansKR-Medium.ttf';
import NotoSansKR_Bold from '../../assets/fonts/NotoSansKR-Bold.ttf';

export const Wrapper = styled.div`
    flex-direction: column;
    padding: 0px 28px 28px 28px;
    font-family: NotoSansKR_Light;
`;

// 상세 정보 버튼
export const DetailInfoButton = styled.button`
    border-radius: 12px 0px 0px 12px;
    margin-right: -2px;
`;

// 리뷰 버튼
export const EventReviewButton = styled.button`
    border-radius: 0px 12px 12px 0px;
`;

/*****************************
 *         정보 영역          *
 *****************************/
export const InfoArea = styled.div`
    text-align: center;

    display: flex;
    align-items: center;
    justify-items: center;
    flex-direction: column;
`;

export const TitleArea = styled.div`
    width: 200px !important;
    height: 38px;
    text-align: center;
    font: 20px bold;
    font-weight: bold;
    font-family: NotoSansKR_Bold;
    margin-top: 20px;
    margin-bottom: 10px;
    border-bottom: 2px solid black;
`;

export const CategoryArea = styled.div`
    width: 40px;
    height: 12px;
    font-size: 8px;
`;

export const PictureArea = styled.div`
    width: 100%;
    margin-top: 35px;
    display: flex;
`;

export const MySwiper = styled(Swiper)`
    width: 336px;
    height: auto;
    padding-bottom: 30px;

    // Pagination 버튼의 비활성 상태 스타일
    .swiper-pagination-bullet {
        width: 8x;
        height: 8px;
    }

    // Pagination 버튼의 활성 상태 스타일
    .swiper-pagination-bullet-active {
        background-color: #018c0d;
        width: 8x;
        height: 8px;
    }
`;

export const SwiperSlideImg = styled.img`
    width: 100%;
    height: 188px;
    border-radius: 5px;
`;

export const PersonalButtonArea = styled.div`
    height: 40px;

    button {
        width: 64px;
        height: 28px;
        border-radius: 32px;
        text-align: center;
        font-size: 12px;
        display: inline-flex;
        align-items: center;
        justify-items: center;
        text-align: center;
        background-color: white;
        margin-left: 4px;
        margin-right: 4px;
    }

    button > svg {
        width: 20px;
        height: 20px;
    }

    button > text {
        height: 20px;
        font-size: 12px;
        margin-left: 5px;
        display: flex;
        align-items: center;
    }
`;

export const SubTitle = styled.div`
    width: 100%;
    height: 20px;
    font: 14px;
    font-weight: bold;
    text-align: left;
    margin-top: 16px;
`;

export const InfoValue = styled.div`
    width: 300px;
    font-size: 12px;
    text-align: left;
    padding-left: 30px;
    margin-top: 8px;
    display:flex;
    flex-direction: column;
    line-height: 20px;
`;

export const ReservationButton = styled.button`
    display: block;
    width: 280px;
    height: 32px;
    border-radius: 10px;
    border: 0px;
    background-color: #018c0d;
    color: white;
    margin-bottom: 10px;
`;

export const ButtonSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    button {
        display: block;
        width: 280px;
        height: 32px;
        border-radius: 10px;
        border: 0px;
        background-color: #018c0d;
        color: white;
        margin-top: 20px;
    }
`;

// 방문 인증 영역
export const AuthArea = styled.div`
    font-size: 12px;
`;
