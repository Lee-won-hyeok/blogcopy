import React, { Component } from "react";
import banner from "./home.jpeg";

class about extends Component {
  constructor(props) {
    super(props);
    this.state = {
      video: {
        url: "https://www.youtube.com/embed/gtMtpt8S7yI",
        caption: `인터미디어아트과가 그림만 그리냐고? 회화, 입체조형, 현대미술, 설치미술, 영상미디어 컴퓨터 아트, 디자인, 애니메이션까지 이 모든 걸 배울 수 있지! 가능성이 무한한 대구가톨릭대학교 인터미디어아트과 어때?`,
      },
    };
  }
  render() {
    return (
      <div className="about">
        <div className="titlesection">
          <div>
            <h3>ABOUT INTERMEDIA ART DEPARTMENT</h3>
            <h2>인터미디어아트과 소개</h2>
          </div>
        </div>

        <article>
          <div>
            <img src={banner} alt="" />
          </div>
          <div className="main">
            <div className="left">
              <div className="iframe_wrapper">
                <iframe
                  width="1024px"
                  height="576px"
                  src={this.state.video.url}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="caption_wrapper">
                <p>{this.state.video.caption}</p>
              </div>
            </div>
            <div className="right">
              <h3>안녕하세요!</h3>
              <p>
                대구가톨릭대학교 인터미디어 아트과(구 회화과)는 1971년 영남지역
                최초의 순수 회화학과로 출발하였으며 50여년 간 수많은 졸업생이
                국내외 화단에서 작가활동을 하고 있습니다.
                <br />
                국내외 화단과 각처의 미술디자인분야에서 활발히 활동하고 있는
                학과의 교수님들이 학생의 능력과 특성에 맞추어 창의적이며 깊이
                있는 전공실기 지도를 하고 있으며 졸업 후 성공적인 진로를 위해
                끊임없는 연구와 노력을 하고 있습니다.
                <br />
                재학생들은 이탈리아 밀라노의 브레라 국립미술대학 교환학생제도를
                통해 재학 중에 1년간 현지에 가서 다양한 전공에 대한 학점을
                이수하며 글로벌한 안목을 키울 수 있습니다.
                <br />
                또한 매년 모집하는 대구가톨릭대학교의 전공연계 해외체험
                프로그램과 해외 봉사활동을 통해 귀중한 해외체험 기회를 얻을 수
                있습니다. 재학기간 중에는 문화체육관광부 인증 문화예술교육사
                자격증을 취득할 수 있는 교육과정을 이수하여 졸업 후
                문화예술교육사로 활동할 수도 있습니다.
                <br />본 인터미디어 아트과는 학생들이 역량 있는 아티스트로
                성장할 수 있도록 다양한 기획 전시회를 마련하여 운영하고 있으며
                국내외 대학과의 교류전, 국내외 공모전 출품지도 등 실질적인 전공
                심화 교육을 실행합니다.
              </p>
              <p>
                참된 예술인의 꿈을 위하여 저희 대구가톨릭대학교 디자인대학
                인터미디어 아트과에서, 현대미술 작가로, 아트 디렉터로,
                문화예술교육사로, 다양한 창조적인 삶의 출발점을 찾으시길 바라며
                여러분의 꿈을 펼쳐 보시기 바랍니다.
              </p>
              <h2>송중덕</h2>
              <h4>대구가톨릭대학교 인터미디어아트과 학과장</h4>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default about;
