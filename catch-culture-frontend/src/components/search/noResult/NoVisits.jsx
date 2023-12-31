import React from 'react';
import { styled } from 'styled-components';

const NoResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;

const NoResultTitle = styled.div`
  display: flex;
  color: #000;
  font-size: 20px;
  font-weight: 700;
  line-height: normal;
  margin-top: 24px;
`;

// 아이콘
import { TbMapPinOff } from 'react-icons/tb';

function NoVisits() {
  return (
    <NoResultWrapper>
      <TbMapPinOff size="140" color="018c0d" />
      <NoResultTitle>문화 행사 방문 내역이 없습니다.</NoResultTitle>
    </NoResultWrapper>
  );
}

export default NoVisits;
