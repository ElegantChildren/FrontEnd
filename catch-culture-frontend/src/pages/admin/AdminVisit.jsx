import React, { useState, useEffect, useMemo } from 'react';
import { useParams, NavLink, useNavigate } from 'react-router-dom';
import Backitem from '../../components/Backitem';
import './AdminReport.css';
import axios from '../../api/axios';
import { TbBalloon, TbNotes } from 'react-icons/tb';

export default function AdminVisit() {
  const navigate = useNavigate();
  const visitAuthId = useParams().id;
  const [nickname, setNickname] = useState('');
  const [title, setTitle] = useState('');
  const [authimg, setAuthimg] = useState([]);
  const [userId, setUserId] = useState(0);
  const [eventId, setEventId] = useState(0);
  const [description, setDescription] = useState('');

  const fetchData = async () => {
    try {
      const res = await axios.get(`/admin/visit-auth/${visitAuthId}`);
      setNickname(res.data.nickname);
      setTitle(res.data.title);
      setAuthimg(res.data.storedFileUrl);
      setUserId(res.data.userId);
      setEventId(res.data.culturalEventId);
      setDescription(res.data.description);
    } catch (e) {
      console.log(e);
      if(e.response.data.code === "LOGIN_FAIL") {
        alert('로그인 만료! 다시 로그인 해주세요.');
        navigate(`/`);
    }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const visitAuthSubmit = async (e) => {
    try {
      await axios.put(
        `/admin/visit-auth/${visitAuthId}?userId=${userId}&culturalEventId=${eventId}`
      );
    } catch (e) {
      console.log(e);
      if(e.response.data.code === "LOGIN_FAIL") {
        alert('로그인 만료! 다시 로그인 해주세요.');
        navigate(`/`);
    }
    }
  };

  const visitAuthReject = async (e) => {
    try {
      await axios.delete(`/admin/visit-auth/${visitAuthId}`);
    } catch (e) {
      console.log(e);
      if(e.response.data.code === "LOGIN_FAIL") {
        alert('로그인 만료! 다시 로그인 해주세요.');
        navigate(`/`);
    }
    }
  };

  const [isShowMore, setIsShowMore] = useState(false);
  const textLimit = 78;

  const descriptionCut = useMemo(() => {
    const shortView = `${description}`.slice(0, textLimit);
    if (`${description}`.length > textLimit) {
      if (isShowMore) return description;
      else return shortView;
    }
    return description;
  }, [isShowMore]);

  return (
    <div className="adminvisitwrap">
      <Backitem />
      <div className="adminvisitcontent">
        <div className="reporterbox">
          <p>제보자 : </p> <p className="reporter">{nickname}</p>
        </div>
        <div className="reportinfowrap">
          <hr />
          <div className="reportimglist">
            {authimg.map((e) => (
              <span key={e.index}>
                <img className="reportimg" src={e} />
              </span>
            ))}
          </div>
          <hr />
          <div className="reportcontent">
            <div className="reportname">
              <p className="textname">
                <TbBalloon />
                행사명
              </p>
              <p className="textcontent">{title} </p>
            </div>
            {description === null ? (
              <></>
            ) : (
              <div className="reportdes">
                <p className="textname">
                  <TbNotes />
                  행사 상세 내용
                </p>
                <div
                  className="textcontent"
                  onClick={() => setIsShowMore(!isShowMore)}
                  onKeyDown={() => setIsShowMore(!isShowMore)}
                >
                  {descriptionCut}
                  <span
                    style={{
                      color: 'grey',
                      fontWeight: '100',
                      cursor: 'pointer',
                    }}
                  >
                    {`${description}`.length > textLimit
                      ? isShowMore
                        ? '닫기'
                        : '...더보기'
                      : null}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="regisbuttonrow">
          <NavLink to="/visitauth/list">
            <div className="regis" type="submit" onClick={visitAuthSubmit} onKeyDown={visitAuthSubmit}>
              승인
            </div>
          </NavLink>
          <NavLink to="/visitauth/list" type="submit" onClick={visitAuthReject}>
            <div className="noregis">미승인</div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
