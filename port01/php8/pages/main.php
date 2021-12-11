<?php
    include "../connect/connect.php";
    include "../connect/session.php";
?>

<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP class</title>

    <?php
        include "../include/link.php";
    ?>
</head>
<body>
    <div id="skip">
        <a href="#main">컨텐츠 바로가기</a>
        <a href="#footer">푸터 바로가기</a>
    </div>
    <!-- //skip -->

    <?php
        include "../include/header.php";
    ?>
    <!-- //header -->

    <main id="main">
        <section id="mainContent">
            <h2 class="ir_so">메인 컨텐츠</h2>

            <article class="content-article">
                <!-- <?php
                    echo "<pre>";
                    var_dump($_SESSION);
                    echo "</pre>";
                ?> -->
                <h3>PORTFOLIO</h3>
                <p>직접 제작한 사이트 입니다.</p>
                <section class="section-card">
                    <h4 class="ir_so">카드 컨텐츠</h4>
                    <ul class="card-list">
                        <li>
                            <a href="http://zezihi.com/">
                                <img src="../assets/img/portfolio.png" alt="portfolio">
                            </a>
                            <div class="item">
                                <strong>PORTFOLIO SITE</strong>
                                <span>저의 포트폴리오 사이트입니다.</span>
                                <span class="keyword">
                                    <span>#frontend</span><span>#publisher</span><span>#website</span>
                                </span>
                            </div>
                        </li>
                        <li>
                            <a href="/webstandard/index.html">
                                <img src="../assets/img/standard.png" alt="standard">
                            </a>
                            <div class="item">
                                <strong>WEB STANDARD SITE</strong>
                                <span>가장 기본 형태의 웹사이트입니다.</span>
                                <span class="keyword">
                                    <span>#frontend</span><span>#publisher</span><span>#website</span>
                                </span>
                            </div>
                        </li>
                        <li>
                            <a href="/webresponsive/index.html">
                                <img src="../assets/img/responsive.png" alt="responsive">
                            </a>
                            <div class="item">
                                <strong>WEB RESPONSIVE SITE</strong>
                                <span>기본 형태의 반응형 웹사이트입니다.</span>
                                <span class="keyword">
                                    <span>#frontend</span><span>#publisher</span><span>#website</span>
                                </span>
                            </div>
                        </li>
                        <li>
                            <a href="/megabox/index.html">
                                <img src="../assets/img/megabox.png" alt="megabox">
                            </a>
                            <div class="item">
                                <strong>MEGABOX SITE</strong>
                                <span>벤치마킹하여 새로 리뉴얼한 웹사이트입니다.</span>
                                <span class="keyword">
                                    <span>#frontend</span><span>#publisher</span><span>#website</span>
                                </span>
                            </div>
                        </li>
                        <li>
                            <a href="http://godzezea.dothome.co.kr/">
                                <img src="../assets/img/fursys.png" alt="fursys">
                            </a>
                            <div class="item">
                                <strong>FURSYS SITE</strong>
                                <span>기업사이트를 리뉴얼한 웹사이트입니다.</span>
                                <span class="keyword">
                                    <span>#frontend</span><span>#publisher</span><span>#website</span>
                                </span>
                            </div>
                        </li>
                        <li>
                            <a href="http://godzezeb.dothome.co.kr/">
                                <img src="../assets/img/desert39.png" alt="desert39">
                            </a>
                            <div class="item">
                                <strong>DESERT39 SITE</strong>
                                <span>기업사이트를 리뉴얼한 웹사이트입니다.</span>
                                <span class="keyword">
                                    <span>#frontend</span><span>#publisher</span><span>#website</span>
                                </span>
                            </div>
                        </li>
                    </ul>
                </section>
            </article>
            <article class="flow-article">
                <h3 class="ir_so">웹스토리보이 강의 설명</h3>
                <section class="section-intro container">
                    <h4 class="ir_so">강의 소개</h4>
                    <div class="youtube-intro">
                        <div>
                            <iframe src="https://www.youtube.com/embed/oOd0IKWwg1E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div>
                            <h5>Frontend? Backend?</h5>
                            <p>프론트엔드와 백엔드의 차이점을 알아봅시다!
                            </p>
                            <div class="interview">
                                <div class="icon">
                                    <a href="https://www.youtube.com/watch?v=gGlVkOiYRus&list=PL4UVBBIc6giLLag20uIwHlHsG83q3PYa5" target="_blank">
                                        <img src="../assets/img/svg-pizza.svg" alt="이정아">
                                        <span>#frontend</span>
                                    </a>
                                </div>
                                <div class="icon">
                                    <a href="https://www.youtube.com/watch?v=gGlVkOiYRus&list=PL4UVBBIc6giLLag20uIwHlHsG83q3PYa5" target="_blank">
                                        <img src="../assets/img/svg-vanilla-cupcake.svg" alt="서지현">
                                        <span>#backend</span>
                                    </a>
                                </div> 
                                <div class="icon">
                                    <a href="https://www.youtube.com/watch?v=NWHIwQlptgM&list=PL4UVBBIc6giLLag20uIwHlHsG83q3PYa5&index=3" target="_blank">
                                        <img src="../assets/img/svg-pear.svg" alt="이소연">
                                        <span>#programmer</span>
                                    </a>
                                </div> 
                                <div class="icon">
                                    <a href="https://www.youtube.com/watch?v=NWHIwQlptgM&list=PL4UVBBIc6giLLag20uIwHlHsG83q3PYa5&index=3" target="_blank">
                                        <img src="../assets/img/svg-cherries.svg" alt="이다빈">
                                        <span>#database</span>
                                    </a>
                                </div> 
                                <div class="icon">
                                    <a href="https://www.youtube.com/watch?v=NWHIwQlptgM&list=PL4UVBBIc6giLLag20uIwHlHsG83q3PYa5&index=3" target="_blank">
                                        <img src="../assets/img/svg-bread-egg.svg" alt="김민정">
                                        <span>#developer</span>
                                    </a>
                                </div> 
                            </div>
                        </div>
                    </div>
                </section>
            </article>
            <article class="content-article content-sub">
                <h3>스크립트</h3>
                <p>Javascript 를 이용하여 만든 컨텐츠 입니다.</p>
                <section class="section-card">
                    <h4 class="ir_so">카드 컨텐츠</h4>
                    <ul class="card-list2">
                        <li>
                            <a href="http://zezihi.com/#section4">
                                <img src="../assets/img/javascript.png" alt="dd">
                            </a>
                            <div class="item">
                                <strong>Play the Piano</strong>
                                <span class="desc">해당되는 키보드는 입력하면 드럼소리가 재생되는 건텐츠입니다.</span>
                            </div>
                        </li>
                        <li>
                            <a href="http://zezihi.com/#section4">
                                <img src="../assets/img/javascript.png" alt="dd">
                            </a>
                            <div class="item">
                                <strong>Play Music</strong>
                                <span class="desc">버튼을 누르면 음악이 재생되는 뮤직 플레이어 컨텐츠입니다.</span>
                            </div>
                        </li>
                        <li>
                            <a href="http://zezihi.com/#section4">
                                <img src="../assets/img/javascript.png" alt="dd">
                            </a>
                            <div class="item">
                                <strong>Card Game</strong>
                                <span class="desc">같은 그림의 카드를 맞추는 게임 컨텐츠입니다.</span>
                            </div>
                        </li>
                        <li>
                            <a href="http://zezihi.com/#section4">
                                <img src="../assets/img/javascript.png" alt="dd">
                            </a>
                            <div class="item">
                                <strong>Calcutator</strong>
                                <span class="desc">Javascript를 이용해 계산기를 제작하였습니다.</span>
                            </div>
                        </li>
                    </ul>
                </section>
            </article>
            <article class="content-article content-sub">
                <h3>애니메이션</h3>
                <p>Css & Javascript 를 이용하여 만든 컨텐츠 입니다.</p>
                <section class="section-card">
                    <h4 class="ir_so">카드 컨텐츠</h4>
                    <ul class="card-list2">
                        <li>
                            <a href="http://zezihi.com/#section5">
                                <img src="../assets/img/animation1.png" alt="dd">
                            </a>
                            <div class="item">
                                <strong>Pulse Effect</strong>
                                <span class="desc">transform initial-scale을 이용해 리듬에 맞게 그림자처럼 점점 처지는 원을 나타내었습니다.</span>
                            </div>
                        </li>
                        <li>
                            <a href="http://zezihi.com/#section5">
                                <img src="../assets/img/animation2.png" alt="dd">
                            </a>
                            <div class="item">
                                <strong>Jumping Text</strong>
                                <span class="desc">Transform translateY 값을 이용해 위 아래로 덤트하는 움직임을 나타내었습니다.</span>
                            </div>
                        </li>
                        <li>
                            <a href="http://zezihi.com/#section5">
                                <img src="../assets/img/animation3.png" alt="dd">
                            </a>
                            <div class="item">
                                <strong>Circle Rotation</strong>
                                <span class="desc">원을 만들어 Trasnform rotate값을 이용해 3개의 원이 각각 겹치지 않게 움직이도록 나타내었습니다.</span>
                            </div>
                        </li>
                        <li>
                            <a href="http://zezihi.com/#section5">
                                <img src="../assets/img/animation4.png" alt="dd">
                            </a>
                            <div class="item">
                                <strong>Creative Loader</strong>
                                <span class="desc">9개의 Box 형태를 만들어 transform scale을 통해 시간차 별로 커지고 작아지는 움직임을 나타내었습니다.</span>
                            </div>
                        </li>
                    </ul>
                </section>
            </article>
        </section>
    </main>
    <!— //header —>

    <?php
        include "../include/footer.php";
    ?>
    <!— //header —>
</body>
</html>