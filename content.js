fetch("https://koroneplus.neocities.org/list.txt")
.then(r => r.text())
.then(x => console.log("K+ LIST:", x))
.catch(e => console.error("K+ FETCH ERROR:", e));
(async()=>{


    const K={

        d:"hideDownload",
        dn:"hideDonate",
        ha:"hideAds",
        h:"hello",
        l:"logo",
        a:"alert",
        rb:"blurRobux",


        vb:"videoBackground",
        vbe:"videoBackgroundEnabled",

        fts:"firstTimeSetupComplete"

    };



    K.fts = "firstTimeSetupComplete";

    async function firstTimeSetup(){

            console.log("OPENING K+ SETUP");



        let setup=document.createElement("div");

        setup.id="kSetup";



        setup.innerHTML=`

        <div class="kSetupBackground"></div>


        <div class="kSetupCenter">


        <div class="kSetupCard">


        <div class="kSetupLogo">
        K+
        </div>


        <div class="kSetupProgress">

        <div class="dot active"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>

        </div>



        <div id="kSetupContent">

        </div>



        <div class="kSetupButtons">


        <button id="kBack">
        Back
        </button>


        <button id="kSkip">
        Skip
        </button>


        <button id="kNext">
        Continue
        </button>


        </div>


        </div>


        </div>

        `;




        let style=document.createElement("style");


        style.textContent=`

        .navbar-d1-0-2-43 {
            background-color: ;
            background-image: none;
        }

        #kSetup{

        position:fixed !important;

        top:0 !important;

        left:0 !important;

        width:100vw !important;

        height:100vh !important;

        z-index:2147483647 !important;

        display:flex !important;

        font-family:Arial, sans-serif;

        color:white;

        overflow:hidden;

        }



        .kSetupBackground{

            position:absolute !important;

            top:0;

            left:0;

            width:100%;

            height:100%;

            background:rgba(0,0,0,.85) !important;

            backdrop-filter:blur(15px);

        }

        .kSetupCenter{

            position:relative !important;

            width:100%;

            height:100%;

            display:flex !important;

            align-items:center;

            justify-content:center;

        }



        .kSetupCard{

            width:520px;

            max-width:90%;

            padding:45px;

            background:

            rgba(30,30,30,.75);

            border-radius:25px;

            box-shadow:

            0 20px 70px rgba(0,0,0,.7);

            backdrop-filter:blur(20px);

            text-align:center;

            animation:

            kSetupFade .35s ease;

        }



        @keyframes kSetupFade{

            from{

                opacity:0;

                transform:translateY(20px);

            }


            to{

                opacity:1;

                transform:none;

            }

        }



        .kSetupLogo{

            font-size:55px;

            font-weight:900;

            margin-bottom:25px;

        }



        .kSetupProgress{

            display:flex;

            justify-content:center;

            gap:10px;

            margin-bottom:30px;

        }



        .dot{

            width:10px;

            height:10px;

            border-radius:50%;

            background:#555;

            transition:.3s;

        }



        .dot.active{

            background:white;

            transform:scale(1.3);

        }



        #kSetupContent h1{

        font-size:34px;

        margin-bottom:15px;

        }



        #kSetupContent p{

        font-size:17px;

        opacity:.75;

        line-height:1.5;

        }



        .kSetupButtons{

            display:flex;

            justify-content:center;

            gap:12px;

            margin-top:35px;

        }



        .kSetupButtons button{

            border:none;

            padding:13px 25px;

            border-radius:14px;

            font-size:16px;

            cursor:pointer;

            background:#333;

            color:white;

            transition:.2s;

        }



        .kSetupButtons button:hover{

            transform:translateY(-2px);

            background:#444;

        }

        .section-content {
            /* background-color: var(--white-color); */
            box-shadow: 0 1px 4px 0 rgba(25,25,25,.3);
            padding: 15px;
            text-align: center;
            font-size: 16px;
            font-weight: 400;
            line-height: 1.4em;
            margin: 0 0 18px;
        }

        .gamesContainer-0-2-196 {
            margin-left: 15px;
            padding-top: 8px;
            margin-right: 15px;
            /* background-color: var(--background-color); */
        }

        .card-d0-0-2-129 {
            background: rgb(0, 0, 0);
        }

        element {
            --text-color-primary: #fff;
            --text-color-secondary: #5a5a5a;
            --text-color-tertiary: #999;
            --white-color: transparent;
            --white-color-hover: #212121;
            --background-color: transparent;
            --text-color-quinary: #5b5b5b;
            --primary-color: var(--blue-color);
            --primary-color-2: var(--blue-color-2);
            --primary-color-hover: var(--blue-color-hover);
            --secondary-color: #0074bd;
        }

        .wrapper-0-2-40 {
            overflow: auto;
            /* max-width: 0; */
            margin-bottom: 0;
        }

        .card-d0-0-2-68 {
            background: transparent;
        }

        .container-d3-0-2-138 {
            background: transparent;
        }

        .container-d3-0-2-23 {
            background: #e3e3e300;
        }

        [data-bs-theme="dark"] {
            color-scheme: transparent;
            --bs-body-color: #dee2e6;
            --bs-body-color-rgb: 222,226,230;
            --bs-body-bg: #212529;
            --bs-body-bg-rgb: 33,37,41;
            --bs-emphasis-color: #fff;
            --bs-emphasis-color-rgb: 255,255,255;
            --bs-secondary-color: rgba(222, 226, 230, 0.75);
            --bs-secondary-color-rgb: 222,226,230;
            --bs-secondary-bg: #343a40;
            --bs-secondary-bg-rgb: 52,58,64;
            --bs-tertiary-color: rgba(222, 226, 230, 0.5);
            --bs-tertiary-color-rgb: 222,226,230;
            --bs-tertiary-bg: #2b3035;
            --bs-tertiary-bg-rgb: 43,48,53;
            --bs-primary-text-emphasis: #6ea8fe;
            --bs-secondary-text-emphasis: #a7acb1;
            --bs-success-text-emphasis: #75b798;
            --bs-info-text-emphasis: #6edff6;
            --bs-warning-text-emphasis: #ffda6a;
            --bs-danger-text-emphasis: #ea868f;
            --bs-light-text-emphasis: #f8f9fa;
            --bs-dark-text-emphasis: #dee2e6;
            --bs-primary-bg-subtle: #031633;
            --bs-secondary-bg-subtle: #161719;
            --bs-success-bg-subtle: #051b11;
            --bs-info-bg-subtle: #032830;
            --bs-warning-bg-subtle: #332701;
            --bs-danger-bg-subtle: #2c0b0e;
            --bs-light-bg-subtle: #343a40;
            --bs-dark-bg-subtle: #1a1d20;
            --bs-primary-border-subtle: #084298;
            --bs-secondary-border-subtle: #41464b;
            --bs-success-border-subtle: #0f5132;
            --bs-info-border-subtle: #087990;
            --bs-warning-border-subtle: #997404;
            --bs-danger-border-subtle: #842029;
            --bs-light-border-subtle: #495057;
            --bs-dark-border-subtle: #343a40;
            --bs-heading-color: inherit;
            --bs-link-color: #6ea8fe;
            --bs-link-hover-color: #8bb9fe;
            --bs-link-color-rgb: 110,168,254;
            --bs-link-hover-color-rgb: 139,185,254;
            --bs-code-color: #e685b5;
            --bs-highlight-color: #dee2e6;
            --bs-highlight-bg: #664d03;
            --bs-border-color: #495057;
            --bs-border-color-translucent: rgba(255, 255, 255, 0.15);
            --bs-form-valid-color: #75b798;
            --bs-form-valid-border-color: #75b798;
            --bs-form-invalid-color: #ea868f;
            --bs-form-invalid-border-color: #ea868f;
        }

        .adImage-0-2-134 {
            width: 100%;
            height: auto;
            margin: 0 auto;
            display: none;
        }

        p.feedtext {
            padding: 10px 0;
            /* text-decoration-color: white; */
            color: white;
        }



        #kNext{

        background:#5865f2;

        }



        #kNext:hover{

        background:#4752c4;

        }

        #kSetup,
        #kSetup * {
        color:white !important;
        }

        #kSetup input {
        color:white !important;
        background:rgba(255,255,255,.1) !important;
        border:1px solid rgba(255,255,255,.25) !important;
        border-radius:12px;
        padding:12px;
        }

        #kSetup input::placeholder {
        color:rgba(255,255,255,.6) !important;
        }

        #kSetup label {
        color:white !important;
        }

        #kSetup button {
        color:white !important;
        }

        @keyframes kRainbowFlash {
            0% { color:red; }
            16% { color:orange; }
            33% { color:yellow; }
            50% { color:lime; }
            66% { color:cyan; }
            83% { color:violet; }
            100% { color:red; }
        }

        .kRainbow,
 .kRainbow * {
     animation:kRainbowFlash 1s infinite !important;
     color: inherit;
 }

        `;


        document.head.appendChild(style);

        document.documentElement.appendChild(setup);

        console.log("SETUP ADDED", setup);


        let step=0;


        let helloValue="";

        let videoValue=c.vb || "";

        let videoEnabled=c.vbe || false;

        let hideDownload=c.d;

        let hideDonate=c.dn;

        let modernNews=c.a;

        let blurRobux=c.rb;



        let content=setup.querySelector("#kSetupContent");

        let dots=setup.querySelectorAll(".dot");

        let back=setup.querySelector("#kBack");

        let next=setup.querySelector("#kNext");

        let skip=setup.querySelector("#kSkip");




        function renderStep(){


            dots.forEach((d,i)=>{

                d.classList.toggle(
                    "active",
                    i===step
                );

            });



            back.style.display =
            step===0 ? "none" : "block";



            next.textContent =
            step===3 ? "Finish" : "Continue";




            if(step===0){


                content.innerHTML=`

                <h1>
                Welcome to K+
                </h1>


                <p>

                Let's personalize your experience.

                <br>

                You can change everything later
                in K+ Settings.

                </p>

                `;


            }




            if(step===1){


                content.innerHTML=`

                <h1>
                Greeting
                </h1>


                <p>
                Choose a custom greeting message.
                </p>


                <input id="helloInput"
                placeholder="Hello message"
                value="${helloValue}">


                `;


                content.querySelector("#helloInput")
                .oninput=e=>{

                    helloValue=e.target.value;

                };


            }




            if(step===2){


                content.innerHTML=`

                <h1>
                Live wallpaper
                </h1>


                <p>
                Add a video background to K+.
                </p>



                <label class="switch">

                <input
                id="videoToggle"
                type="checkbox"
                ${videoEnabled?"checked":""}>

                Enable video background

                </label>



                <br><br>


                <input
                id="videoUpload"
                type="file"
                accept="video/*">


                <p id="videoName">

                ${videoValue ? "Video selected ✓" : ""}

                </p>

                `;



                content.querySelector("#videoToggle")
                .onchange=e=>{

                    videoEnabled=e.target.checked;

                };



                content.querySelector("#videoUpload")
                .onchange=e=>{


                    let file=e.target.files[0];


                    if(!file)
                        return;



                    let reader=new FileReader();



                    reader.onload=()=>{

                        videoValue=reader.result;

                        content.querySelector("#videoName")
                        .textContent=
                        "Video selected ✓";

                    };


                    reader.readAsDataURL(file);


                };


            }




            if(step===3){


                content.innerHTML=`

                <h1>
                Customize
                </h1>


                <p>
                Choose what K+ changes.
                </p>



                <label>
                <input id="hideDownload"
                type="checkbox"
                ${hideDownload?"checked":""}>

                Hide Download

                </label>


                <br><br>


                <label>
                <input id="hideDonate"
                type="checkbox"
                ${hideDonate?"checked":""}>

                Hide Donate

                </label>


                <br><br>


                <label>
                <input id="modernNews"
                type="checkbox"
                ${modernNews?"checked":""}>

                Modernized News

                </label>


                <br><br>


                <label>
                <input id="blurRobux"
                type="checkbox"
                ${blurRobux?"checked":""}>

                Blur Robux

                </label>


                `;



                content.querySelector("#hideDownload")
                .onchange=e=>{

                    hideDownload=e.target.checked;

                };


                content.querySelector("#hideDonate")
                .onchange=e=>{

                    hideDonate=e.target.checked;

                };


                content.querySelector("#modernNews")
                .onchange=e=>{

                    modernNews=e.target.checked;

                };


                content.querySelector("#blurRobux")
                .onchange=e=>{

                    blurRobux=e.target.checked;

                };


            }


        }



        renderStep();back.onclick=()=>{


            if(step<=0)
                return;


            step--;

            renderStep();


        };




        next.onclick=async()=>{


            if(step < 3){


                step++;

                renderStep();

                return;

            }






            c.h=helloValue;

            c.vb=videoValue;

            c.vbe=videoEnabled;

            c.d=hideDownload;

            c.dn=hideDonate;

            c.a=modernNews;

            c.rb=blurRobux;



            await browser.storage.local.set({

                [K.h]:c.h,

                [K.vb]:c.vb,

                [K.vbe]:c.vbe,

                [K.d]:c.d,

                [K.dn]:c.dn,

                [K.a]:c.a,

                [K.rb]:c.rb,

                [K.fts]:true

            });



            c.fts=true;



            content.innerHTML=`

            <h1>
            🎉 You're Ready!
            </h1>


            <p>

            K+ has been customized.

            <br><br>

            To access K+ Settings:

            <br><br>

            Go to your Account Settings,
            then refresh the page.

            <br><br>

            After refreshing,
            K+ Settings will appear
            at the very bottom of the page.

            </p>

            `;



            back.style.display="none";

            skip.style.display="none";

            next.textContent="Start K+";



            next.onclick=()=>{


                apply();

                applyLoaderVideo();

                createPageVideo();


                setup.remove();


            };


        };






        skip.onclick=async()=>{


            await browser.storage.local.set({

                [K.fts]:true

            });


            c.fts=true;


            setup.remove();


        };







        };



    let s=await browser.storage.local.get(
        Object.values(K)
    );



    let c={

        d:s[K.d]??true,

        dn:s[K.dn]??false,

        ha:s[K.ha]??false,

        h:s[K.h]??"",

        l:s[K.l]??"",

        a:s[K.a]??true,

        rb:s[K.rb]??false,


        vb:s[K.vb]??"",

        vbe:s[K.vbe]??false,

        fts:s[K.fts]??false

    };




// WHY THE FUCK DO I NEED THIS


    const loader=document.createElement("div");

    loader.id="pekoraLoader";


    loader.innerHTML=`

    <video id="pekoraVideoBg"
    autoplay
    muted
    loop
    playsinline>
    </video>


    <div class="pekoraOverlay"></div>


    <div class="pekoraContent">

    <div class="pekoraSpinner"></div>

    <div>
    Loading Tweaks..
    </div>

    </div>

    `;



    const style=document.createElement("style");

    style.textContent=`

    .card-d0-0-2-100 {
        background: opacity: 0.5; !important;
    }

    .section-content {
        background-color: transparent;
        box-shadow: 0 1px 4px 0 rgba(25,25,25,.3);
        padding: 15px;
        text-align: center;
        font-size: 16px;
        font-weight: 400;
        line-height: 1.4em;
        margin: 0 0 18px;
    }

    .card-d0-0-2-100 {
        background: transparent;
    }

    .alertBg-0-2-60 {
        background: transparent;
    }

    #pekoraLoader{

    position:fixed;

    inset:0;

    background:#111;

    color:white;

    display:flex;

    justify-content:center;

    align-items:center;

    font-family:Arial,sans-serif;

    font-size:20px;

    z-index:9999999999;

    overflow:hidden;

    }



    #pekoraVideoBg{

    position:absolute;

    inset:0;

    width:100%;

    height:100%;

    object-fit:cover;

    display:none;

    z-index:-2;

    }



    .pekoraOverlay{

        position:absolute;

        inset:0;

        background:rgba(0,0,0,.45);

        z-index:-1;

    }



    .pekoraContent{

        display:flex;

        flex-direction:column;

        align-items:center;

        gap:15px;

    }



    .pekoraSpinner{

        width:50px;

        height:50px;

        border:6px solid #444;

        border-top-color:white;

        border-radius:50%;

        animation:pekoraSpin .8s linear infinite;

    }



    @keyframes pekoraSpin{

        from{
            transform:rotate(0deg)
        }

        to{
            transform:rotate(360deg)
        }

    }




    #pekoraPageVideo {

    position:fixed;

    inset:0;

    width:100%;

    height:100%;

    object-fit:cover;

    filter:blur(3px);

    transform:scale(1.05);

    z-index:-999;

    pointer-events:none;


body::before {

    content:"";

    position:fixed;

    inset:0;

    background:rgba(0,0,0,.35);

    backdrop-filter:blur(8px);

    -webkit-backdrop-filter:blur(8px);

    z-index:-998;

    pointer-events:none;

}.container-d3-0-2-23 {

    background:transparent !important;

}


body::before {

    content:"";

    position:fixed;

    inset:0;

    background:rgba(0,0,0,.35);

    backdrop-filter:blur(8px);

    -webkit-backdrop-filter:blur(8px);

    z-index:-998;

    pointer-events:none;

}.container-d3-0-2-23 {

    background:transparent !important;

}


body::before {

    content:"";

    position:fixed;

    inset:0;

    background:rgba(0,0,0,.35);

    backdrop-filter:blur(8px);

    -webkit-backdrop-filter:blur(8px);

    z-index:-998;

    pointer-events:none;

}
.container-d3-0-2-23 {

    background:transparent !important;

}


body::before {

    content:"";

    position:fixed;

    inset:0;

    background:rgba(0,0,0,.35);

    backdrop-filter:blur(8px);

    -webkit-backdrop-filter:blur(8px);

    z-index:-998;

    pointer-events:none;

}

.kPlusSettings:hover {

    background:transparent !important;

}


.kPlusSettings:hover::before {

    display:none !important;

}


.kPlusSettings,
.kPlusSettings:hover {

    text-decoration:none !important;

}

    `;




    document.documentElement.appendChild(style);

    document.documentElement.appendChild(loader);







    function applyLoaderVideo(){


        let video=document.querySelector(
            "#pekoraVideoBg"
        );



        if(!video)return;



        if(c.vbe && c.vb){


            video.src=c.vb;

            video.style.display="block";

            video.play().catch(()=>{});


        }else{


            video.pause();

            video.removeAttribute("src");

            video.style.display="none";


        }


    }





    function createPageVideo(){


        let old=document.querySelector(
            "#pekoraPageVideo"
        );


        if(old)

            old.remove();



        if(!c.vbe || !c.vb)

            return;



        let video=document.createElement("video");


        video.id="pekoraPageVideo";


        video.src=c.vb;

        video.autoplay=true;

        video.loop=true;

        video.muted=true;

        video.playsInline=true;



        document.body.prepend(video);



        video.play().catch(()=>{});



    }





    applyLoaderVideo();





    setTimeout(()=>{


        loader.style.opacity="0";

        loader.style.transition=".3s";



        setTimeout(()=>{


            loader.remove();


        },300);



    },1000);




    setTimeout(()=>{

        createPageVideo();

    },1200);






    function apply(){

        document.querySelectorAll(
            ".skyScraperRight-0-2-6, .col-12.col-lg-3.advertisementContainer-0-2-221, .skyScraperLeft-0-2-5, .advertisementContainer-0-2-138"
        )
        .forEach(e=>{

            e.style.display = c.ha ? "none" : "";

        });

        document.querySelectorAll(".hover-icon-nav-download")

        .forEach(e=>{

            e.style.display=c.d ? "none" : "";

        });





        document.querySelectorAll('a[href="/donate"]')

        .forEach(e=>{

            e.style.display=c.dn ? "none" : "";

        });





        if(c.h)

            document.querySelectorAll(".helloMessage-0-2-11")

            .forEach(e=>{

                e.textContent=c.h;

            });







        if(c.l)

            document.querySelectorAll(".imgDesktop-0-2-44")

            .forEach(e=>{

                e.style.background=
                `url(${c.l}) center/contain no-repeat`;

            });







        document.querySelectorAll(".currencySpan-0-2-89")

        .forEach(e=>{

            e.style.filter=

            c.rb ? "blur(6px)" : "";

        });



        security();


    }



    async function addSpecialUserBadge() {
        try {
            const text = await fetch("https://koroneplus.neocities.org/list.txt")
            .then(r => r.text());

            const usernames = new Set(
                text
                .split(/\r?\n/)
                .map(x => x.trim().toLowerCase())
                .filter(Boolean)
            );

            function check() {
                const usernameContainer = document.querySelector('[class*="usernameContainer"]');

                if (!usernameContainer)
                    return false;

                const username = usernameContainer.textContent.trim().toLowerCase();

                console.log("K+ checking:", username);

                if (!usernames.has(username))
                    return true;

const usernameElement = document.querySelector(".username-0-2-106");

                if (!usernameElement)
                    return false;

                if (usernameElement.querySelector(".kplus-special-badge"))
                    return true;

                const img = document.createElement("img");

                img.src = "https://koroneplus.neocities.org/3dgifmaker14720.gif";
                img.className = "kplus-special-badge";

                img.style.width = "24px";
                img.style.height = "24px";
                img.style.marginLeft = "6px";
                img.style.verticalAlign = "middle";

                usernameElement.appendChild(img);

                console.log("K+ badge added!");

                return true;
            }


            if (!check()) {
                const observer = new MutationObserver(() => {
                    check();
                });

                observer.observe(document.body, {
                    childList: true,
                    subtree: true
                });

                setTimeout(() => observer.disconnect(), 10000);
            }

        } catch (e) {
            console.error("K+ badge error:", e);
        }
    }





    let newsDismissed = false;

    function security(){
        if (newsDismissed) return;

        if (document.querySelector("#secAlert"))
            return;



        let a=document.querySelector(
            ".alertLink-0-2-62"
        );




        if(!a || !c.a)

            return;





        a.style.display="none";




        let b=document.createElement("div");


        b.id="secAlert";



        b.innerHTML=`

        <button id="x">
        ×
        </button>


        <b>
        Korone News
        </b>


        <br><br>


        <a id="m">
        ${a.textContent}
        </a>


        <div id="bar"></div>

        `;






        Object.assign(
            b.style,
            {

                position:"fixed",

                right:"20px",

                bottom:"20px",

                width:"330px",

                background:"#202020",

                color:"white",

                padding:"15px",

                borderRadius:"12px",

                zIndex:"2147483647",

                fontFamily:"Arial"

            }

        );






        document.body.append(b);






        let x=b.querySelector("#x");

        let m=b.querySelector("#m");

        let bar=b.querySelector("#bar");






        m.href=a.href;

        m.target="_blank";

        m.style.color="#ddd";






        bar.style.cssText=

        `

        position:absolute;

        bottom:0;

        left:0;

        height:4px;

        background:red;

        width:100%;

        `;






        x.onclick=()=>{

            newsDismissed = true;

            clearInterval(timer);

            b.style.opacity="0";

            setTimeout(()=>{

                b.remove();

            },300);

        };






        let n=100;



        let timer=setInterval(()=>{


            n--;


            bar.style.width=n+"%";



            if(n<=0){


                clearInterval(timer);


                b.style.opacity="0";


                setTimeout(()=>{


                    b.remove();


                },300);


            }


        },100);




    }







apply();

setTimeout(()=>{

    apply();

},1000);


setInterval(()=>{

    apply();

},0);


    let p=document.createElement("div");


    p.innerHTML=`

    <b>Settings</b>

    <br><br>


    <input id="d" type="checkbox">

    Hide Download


    <br>


    <input id="dn" type="checkbox">

    Hide Donate

    <br>

    <input id="ha" type="checkbox">

    Hide Ads

    <br><br>


    <input id="h" placeholder="Hello message">

    <button id="hs">
    Save
    </button>



    <br><br>


    <input id="l" type="file" accept="image/*">


    <br><br>


    <input id="a" type="checkbox">

    Modernized news



    <br>


    <input id="rb" type="checkbox">

    Blur Robux



    <br><br>

    <hr>


    <b>Video Background</b>


    <br><br>


    <input id="vbe" type="checkbox">

    Enable Video Background



    <br><br>


    <input id="vb" type="file" accept="video/*">


    `;







    Object.assign(p.style,{

        position:"fixed",

        bottom:"60px",

        left:"15px",

        background:"#222",

        color:"white",

        padding:"15px",

        borderRadius:"10px",

        zIndex:"999999",

        display:"none",

        fontFamily:"Arial"

    });





    document.body.append(p);


    document.addEventListener("click", function(e){

        let settingsButton = e.target.closest(
            'a.dropdownItemLink-0-2-127[href="/My/Account"]'
        );


        if(!settingsButton)
            return;


        e.preventDefault();


        p.style.display = "block";


    });


    function addKSettingsToCustomize(){


        if(!location.pathname.includes("/My/Account"))

            return;



        let headings=[...document.querySelectorAll("h3")];


        let title=headings.find(e=>

        e.textContent.includes("Customize Your Korone")

        );



        if(!title){

            setTimeout(addKSettingsToCustomize,500);

            return;

        }




        let section=title.parentElement;



        if(document.querySelector("#kPlusSettings"))

            return;




        let k=document.createElement("div");


        k.id="kPlusSettings";


        k.className="col-12 mt-2";



        k.innerHTML=`

        <h3 class="text-0-2-223">
        K+ Settings
        </h3>


        <div class="card-0-2-194 p-3">


        <div class="flex mt-1">


        <div class="col pe-0">

        <input
        class="form-control select-0-2-214 disabled-0-2-215"
        readonly
        value="Open K+ Settings">

        </div>


        <div class="col ps-0 pe-0">

        <button
        class="form-control select-0-2-214"
        id="openKPlus">

        Open

        </button>

        </div>


        </div>


        </div>

        `;



        section.parentElement.appendChild(k);



        k.querySelector("#openKPlus").onclick=()=>{

            p.style.display="block";

        };


    }



    setTimeout(addKSettingsToCustomize,2000);




    let $=x=>p.querySelector(x);







    $("#d").checked=c.d;

    $("#dn").checked=c.dn;

    $("#ha").checked=c.ha;

    $("#a").checked=c.a;

    $("#rb").checked=c.rb;

    $("#h").value=c.h;

    $("#vbe").checked=c.vbe;










    $("#d").onchange=async()=>{


        c.d=$("#d").checked;


        await browser.storage.local.set({

            [K.d]:c.d,

        });


        apply();


    };









    $("#dn").onchange=async()=>{


        c.dn=$("#dn").checked;


        await browser.storage.local.set({

            [K.dn]:c.dn

        });


        apply();


    };


    $("#ha").onchange=async()=>{

        c.ha=$("#ha").checked;

        await browser.storage.local.set({

            [K.ha]:c.ha

        });

        apply();

    };







    $("#a").onchange=async()=>{


        c.a=$("#a").checked;


        await browser.storage.local.set({

            [K.a]:c.a

        });


        apply();


    };











    $("#rb").onchange=async()=>{


        c.rb=$("#rb").checked;


        await browser.storage.local.set({

            [K.rb]:c.rb

        });


        apply();


    };












    $("#hs").onclick=async()=>{


        c.h=$("#h").value;



        await browser.storage.local.set({

            [K.h]:c.h

        });



        apply();


    };












    $("#l").onchange=()=>{


        let f=$("#l").files[0];


        if(!f)

            return;




        let r=new FileReader();




        r.onload=async()=>{


            c.l=r.result;



            await browser.storage.local.set({

                [K.l]:c.l

            });



            apply();



        };



        r.readAsDataURL(f);


    };












    $("#vbe").onchange=async()=>{


        c.vbe=$("#vbe").checked;




        await browser.storage.local.set({

            [K.vbe]:c.vbe

        });




        applyLoaderVideo();


        createPageVideo();



    };











    $("#vb").onchange=()=>{


        let f=$("#vb").files[0];


        if(!f)

            return;





        let r=new FileReader();




        r.onload=async()=>{


            c.vb=r.result;




            await browser.storage.local.set({

                [K.vb]:c.vb

            });




            applyLoaderVideo();


            createPageVideo();



        };




        r.readAsDataURL(f);



    };















    console.log("FTS VALUE:", c.fts);

    console.log("FTS VALUE:", c.fts);

    if(!c.fts){

        console.log("CALLING SETUP");

        setTimeout(()=>{
            firstTimeSetup();
        },1500);

    }

    addSpecialUserBadge();


    function rainbowGroup(){

        if(!location.pathname.includes("/groups/8858"))
            return;

        document.querySelectorAll(".col-9.ps-0")
        .forEach(el=>{
            el.classList.add("kRainbow");

            el.querySelectorAll("*").forEach(child=>{
                child.classList.add("kRainbow");
            });
        });

    }


    rainbowGroup();


    new MutationObserver(()=>{
        rainbowGroup();
    }).observe(document.body,{
        childList:true,
        subtree:true
    });


    })();
