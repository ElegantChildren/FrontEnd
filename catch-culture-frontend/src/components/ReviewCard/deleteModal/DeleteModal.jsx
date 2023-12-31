import * as S from './style'
import { useNavigate } from 'react-router-dom';
import axios from '../../../api/axios'

export const DeleteModal = (params) => {  
    const navigate = useNavigate();

    const onClickDelete = async () => {
        try {
            await axios.delete(
                `review/${parseInt(params.EventId)}/my-review`,
                {
                    data:{reviewId: params.reviewId},
                    headers: {
                        'Content-Type': 'application/json', 
                    },
                },
            )
            params.fetchMyReview();
            params.setModal();
        } catch (e) {
            console.log(e);
            if(e.response.data.code === "LOGIN_FAIL") {
                alert('로그인 만료! 다시 로그인 해주세요.');
                navigate(`/`);
            }
        }
    }

  const onClickCancel = () => {
    params.setModal();
  };

  return (
    <S.ModalBackdrop>
      <S.ModalContainer>
        <S.ModalView>
          <p>리뷰를 삭제 하시겠습니까?</p>
          <S.ButtonSection>
            <S.MyBtn onClick={onClickCancel}>취소</S.MyBtn>
            <S.MyBtn onClick={onClickDelete}>삭제</S.MyBtn>
          </S.ButtonSection>
        </S.ModalView>
      </S.ModalContainer>
    </S.ModalBackdrop>
  );
};

export default DeleteModal;
