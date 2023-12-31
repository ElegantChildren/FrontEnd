import React from 'react';
import Backitem from '../../components/Backitem';
import Level0 from '../../assets/pointimg/level0.png';
import Level1 from '../../assets/pointimg/level1.png';
import Level2 from '../../assets/pointimg/level2.png';
import Level3 from '../../assets/pointimg/level3.png';
import './PointLevel.css';

function PointLevel() {
  return (
    <div className="plall">
      <Backitem />
      <div className="mypointinfo">
        MY POINT
        <div className="levelinfo">
          <div className="levelcolorrow">
            <div className="greenlev">
              <div className="greengraph"></div>
              <p>
                Catchy
                <br />
                Green
              </p>
            </div>
            <div className="yellowlev">
              <div className="yellowgraph"></div>
              <p>
                Catchy
                <br />
                Yellow
              </p>
            </div>
            <div className="pinklev">
              <div className="pinkgraph"></div>
              <p>
                Catchy
                <br />
                Pink
              </p>
            </div>
            <div className="redlev">
              <div className="redgraph"></div>
              <p>
                Catchy
                <br />
                Red
              </p>
            </div>
          </div>
          <div className="levtextinfo">
            Catchy Green : 회원가입 한 유저
            <br />
            Catchy Yellow : 누적 3000p 획득 시 승급
            <br />
            Catchy Pink : 누적 6000p 획득 시 승급
            <br />
            Catchy Red : 누적 10000p 획득 시 승급
          </div>
          <hr />
        </div>
      </div>
      <div className="mylevel">
        <div className="mylevtext">포인트 등급 안내</div>
        <div className="restlev">
          <div className="mylevimg">
            <img className="mylevimgbig" src={Level0} />
            <div className="mylevtextbig">
              Catchy
              <br />
              Green
            </div>
          </div>
          <div className="rest1">
            <img className="mylevimg1" src={Level1} />
            <div className="mylevtext1">
              Catchy
              <br />
              Yellow
            </div>
          </div>
        </div>
        <div className="restlev">
          <div className="rest2">
            <img className="mylevimg2" src={Level2} />
            <div className="mylevtext2">
              Catchy
              <br />
              Pink
            </div>
          </div>
          <div className="rest3">
            <img className="mylevimg3" src={Level3} />
            <div className="mylevtext3">
              Catchy
              <br />
              Red
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PointLevel;
