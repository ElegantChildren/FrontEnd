import * as S from './style.jsx';
import { useEffect, useState } from 'react';

import Backitem from '../../components/Backitem.jsx';
import UploadBox from '../../components/uploadImg/UploadBox.jsx';

import SetRating from './setRating/SetRating.jsx';

// api
import axios from '../../api/axios';

function Review ( params ) {
    let title = "test"; // params.data.title
    let eventId = "10"; //params.data.eventId

    const [disabled, setDisabled] = useState(false);
    
    const [rating, setRating] = useState();
    const [imgUrl, setImgUrl] = useState();
    const [description, setDescription] = useState("");

    const handleRating = (rating) => {
        setRating(rating);
    }

    const handleImgUrl = (url) => {
        setImgUrl(url);
    }

    const handleDescription = ({ target: {value}}) => {
        setDescription(value);
    }
    
    const handleSubmit = async(event) => {
        setDisabled(true);
        event.preventDefault();

        if(description.length < 30) {

        } else {
            try {
                // const response= axios.post(
                //     `cultural-event/${parseInt(eventId)}/like`,
                // );
                console.log(rating);
                console.log(imgUrl);
                console.log(description);

            } catch (e) {
                console.log(e);
            }
        }
        setDisabled(false);
    }

    return (
        <S.Wrapper>
            <Backitem />
            
            <S.Content onSubmit={handleSubmit}>
                {/* 행사 제목 */}
                <S.TitleArea>
                    {title}
                </S.TitleArea>

                <SetRating setRating={handleRating}/>

                <S.SubTitle>사진 등록</S.SubTitle>
                <UploadBox setUrl={handleImgUrl}/>

                <S.SubTitle>리뷰 등록 *</S.SubTitle>
                <S.ReviewTextAreaWrap>
                    <S.ReviewTextArea
                        placeholder="리뷰를 작성 해주세요. (최소 30자 이상)"
                        minLength={30}
                        value={description}
                        onChange={handleDescription}
                        required
                    />
                </S.ReviewTextAreaWrap>

                <S.ButtonSection>           
                    <button type='submit' style={ description.length < 30 ? {backgroundColor: '#A7A7A7'} : {backgroundColor: '#018C0D'}}>
                        방문 인증 요청
                    </button>
                </S.ButtonSection>
            </S.Content>
        </S.Wrapper> 
    );
}

export default Review;