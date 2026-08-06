console.log("Góc nhỏ của Kly");
// Chưa dùng JavaScript ở phần này
console.log("Home loaded!");
const home = document.querySelector(".home");
const frame = document.querySelector(".photo-frame");

if (home && frame) {

    home.addEventListener("mousemove", (e) => {

        const x = (e.clientX / window.innerWidth - 0.5) * 40;
        const y = (e.clientY / window.innerHeight - 0.5) * 40;

        frame.style.transform =
            `translate(${x}px, ${y}px) rotate(-3deg)`;

    });

    home.addEventListener("mouseleave", () => {

        frame.style.transform = "rotate(-3deg)";

    });

}

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

if (menuToggle && navMenu) {

    // Mở / đóng menu
    menuToggle.addEventListener("click", (e) => {

        e.stopPropagation();

        navMenu.classList.toggle("show");

    });

    // Bấm vào menu thì không tự đóng
    navMenu.addEventListener("click", (e) => {

        e.stopPropagation();

    });

    // Bấm ra ngoài sẽ đóng
    document.addEventListener("click", () => {

        navMenu.classList.remove("show");

    });

    // Khi đổi sang desktop thì tự đóng menu
    window.addEventListener("resize", () => {

        if (window.innerWidth > 900) {

            navMenu.classList.remove("show");

        }

    });

}




/* =====================================================
                PROFILE SCRIPT V3
===================================================== */

/* ================= Scroll Reveal ================= */

const cards = document.querySelectorAll(".profile-card");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach((entry,index)=>{

        if(entry.isIntersecting){

            setTimeout(()=>{

                entry.target.classList.add("show");

            },index*120);

        }

    });

},{
    threshold:0.15
});


/* ================= Hero Animation ================= */

window.addEventListener("load",()=>{

    const hero=document.querySelector(".hero-card");

    if(hero){

        hero.style.opacity="0";
        hero.style.transform="translateY(40px)";

        setTimeout(()=>{

            hero.style.transition=".8s ease";
            hero.style.opacity="1";
            hero.style.transform="translateY(0)";

        },150);

    }

});

/* ================= Avatar Glow ================= */

const avatar=document.querySelector(".avatar");

if(avatar){

avatar.addEventListener("mousemove",(e)=>{

    const rect=avatar.getBoundingClientRect();

    const x=e.clientX-rect.left;

    const y=e.clientY-rect.top;

    avatar.style.background=
    `radial-gradient(circle at ${x}px ${y}px,
    rgba(255,255,255,.28),
    transparent 65%)`;

});

avatar.addEventListener("mouseleave",()=>{

    avatar.style.background="transparent";

});

}

/* ================= Hero Banner ================= */

const hero=document.querySelector(".hero-card");

const banner=document.querySelector(".hero-banner");

if(hero && banner){

hero.addEventListener("mousemove",(e)=>{

    const rect=hero.getBoundingClientRect();

    const x=(e.clientX-rect.left)/rect.width;

    const y=(e.clientY-rect.top)/rect.height;

    banner.style.transform=

    `scale(1.05)
     translate(${(x-.5)*10}px,
               ${(y-.5)*10}px)`;

});

hero.addEventListener("mouseleave",()=>{

    banner.style.transform="scale(1)";

});

}

/* ================= Badge Hover ================= */

const badges=document.querySelectorAll(".badges span");

badges.forEach((badge)=>{

badge.addEventListener("mouseenter",()=>{

    badge.style.transform=

    "translateY(-6px) scale(1.05)";

});

badge.addEventListener("mouseleave",()=>{

    badge.style.transform="";

});

});

/* ================= Ripple Effect ================= */

badges.forEach((badge)=>{

    badge.addEventListener("click",()=>{

        badge.classList.toggle("active");

    });

});

/* ================= Navbar ================= */

const menu=document.querySelectorAll(".menu a");

menu.forEach(link=>{

link.addEventListener("mouseenter",()=>{

    link.style.color="#6EA8DD";

});

link.addEventListener("mouseleave",()=>{

    if(!link.classList.contains("active"))

        link.style.color="";

});

});

/* ================= Card Hover ================= */

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

    card.style.transition=".35s";

});

});

/* ================= Signature ================= */

const sign=document.querySelector(".signature");

if(sign){

sign.style.opacity="0";

setTimeout(()=>{

    sign.style.transition="1.2s";

    sign.style.opacity="1";

},800);

}

cards.forEach(card=>observer.observe(card));

/* ================= LOADING SCREEN ================= */

// Ẩn loading khi trang tải xong

window.addEventListener("load",()=>{

    setTimeout(()=>{

        document.getElementById("loader").classList.add("hide");

    },300);

});


// Hiệu ứng chuyển trang

document.querySelectorAll("a").forEach(link=>{

    const href=link.getAttribute("href");

    if(!href) return;

    if(href.startsWith("#")) return;

    if(link.target==="_blank") return;

    link.addEventListener("click",(e)=>{

        e.preventDefault();

        document.body.classList.add("fade-out");

        document.getElementById("loader").classList.remove("hide");

        setTimeout(()=>{

            window.location=href;

        },350);

    });

});


/* ================= MUSIC ================= */

const disc=document.getElementById("music-disc");
const audio=document.getElementById("bgm");
const playlist=document.getElementById("playlist");
const pauseBtn=document.getElementById("pause-btn");

disc.classList.add("idle");

pauseBtn.innerHTML =
'<span class="material-symbols-rounded">play_arrow</span>';

pauseBtn.onclick=()=>{

    if(audio.paused){

        audio.play();
pauseBtn.innerHTML =
'<span class="material-symbols-rounded">pause</span>';

    }else{

        audio.pause();

pauseBtn.innerHTML =
'<span class="material-symbols-rounded">play_arrow</span>';

    }

}

disc.onclick = (e)=>{

    e.stopPropagation();

    playlist.classList.toggle("show");


}

playlist.onclick = (e) => {

    e.stopPropagation();

}


audio.onpause = ()=>{

    disc.classList.remove("playing");

    disc.classList.add("idle");

    pauseBtn.innerHTML =

    '<span class="material-symbols-rounded">play_arrow</span>';

}

audio.onplay = ()=>{

    disc.classList.remove("idle");

    disc.classList.add("playing");

    pauseBtn.innerHTML =

    '<span class="material-symbols-rounded">pause</span>';
}


const buttons = document.querySelectorAll("#playlist button[data-src]");

buttons.forEach((btn,index)=>{

    btn.addEventListener("click",()=>{

        currentSong=index;

        audio.src = buttons[currentSong].dataset.src;

        audio.play();

        buttons.forEach(b=>b.classList.remove("song-active"));
        btn.classList.add("song-active");

        pauseBtn.innerHTML=
        '<span class="material-symbols-rounded">pause</span>';

        playlist.classList.remove("show");

    });

});

// Đóng playlist khi click ra ngoài

document.addEventListener("click", (e) => {

    // Nếu không click vào đĩa và cũng không click vào playlist
    if (
        !disc.contains(e.target) &&
        !playlist.contains(e.target)
    ) {

        playlist.classList.remove("show");

    }

});

audio.onended = ()=>{

    pauseBtn.innerHTML =
    '<span class="material-symbols-rounded">play_arrow</span>';

    disc.classList.remove("playing");

    disc.classList.add("idle");

}

/* ================= PRODUCTS REVEAL ================= */

const productCards = document.querySelectorAll(".product-card");

const productObserver = new IntersectionObserver((entries)=>{

    entries.forEach((entry,index)=>{

        if(entry.isIntersecting){

            setTimeout(()=>{

                entry.target.classList.add("show");

            },index*80);

        }

    });

},{
    threshold:.15
});

productCards.forEach(card=>productObserver.observe(card));


/* ================= PRODUCTS FILTER ================= */

const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".tag");

let currentSearch = "";
let currentFilter = "all";

function filterProducts(){

    let visibleCount = 0;

    productCards.forEach(card=>{

        const title = card.querySelector("h3")
            .textContent.toLowerCase();

        const tags = card.dataset.tags.toLowerCase();

        const category = card.dataset.category.toLowerCase();

        const matchSearch =
            title.includes(currentSearch) ||
            tags.includes(currentSearch);

        const matchFilter =
            currentFilter==="all" ||
            category.includes(currentFilter);

        if(matchSearch && matchFilter){

            card.style.display="block";

            visibleCount++;

        }else{

            card.style.display="none";

        }

    });

    const noResult = document.getElementById("no-result");

    if(noResult){

        if(visibleCount===0){

            noResult.classList.add("show");

        }else{

            noResult.classList.remove("show");

        }

    }

}

/* SEARCH */

if(searchInput){

    searchInput.addEventListener("input",()=>{

        currentSearch = searchInput.value.toLowerCase();

        filterProducts();

    });

}

/* TAG */

filterButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        filterButtons.forEach(btn=>{

            btn.classList.remove("active");

        });

        button.classList.add("active");

        currentFilter = button.dataset.filter.toLowerCase();

        filterProducts();

    });

});

/*==========================
        QUOTE POPUP
==========================*/

const quotes = [

{
    en:"Believe you can and you're halfway there.",
    vi:"Khi đã tin rằng bạn có thể làm được là bạn đã đi được nửa chặng đường.",
    author:"— Theodore Roosevelt"
},

{
    en:"Life shrinks or expands in proportion to one's courage.",
    vi:"Cuộc đời co hẹp hay mở rộng tỉ lệ thuận với sự dũng cảm của mỗi người.",
    author:"— Anais Nin"
},

{
    en:"You must be the change you wish to see in the world.",
    vi:"Chính bạn phải là sự thay đổi mà bạn muốn nhìn thấy trong thế giới.",
    author:"— Mahatma Gandhi"
},

{
    en:"Believe and act as if it were impossible to fail.",
    vi:"Hãy tin tưởng và hành động như thể việc thất bại là điều không thể.",
    author:"— Charles Kettering"
},

{
    en:"The difference between ordinary and extraordinary is that little extra.",
    vi:"Sự khác biệt giữa điều bình thường và phi thường chỉ là một chút nỗ lực thêm.",
    author:"— Jimmy Johnson"
},

{
    en:"The best way to predict the future is to invent it.",
    vi:"Cách tốt nhất để dự đoán tương lai là hãy tạo ra nó.",
    author:"— Alan Kay"
},

{
    en:"If I am not for myself, who is for me? And if I am only for myself, what am I? And if not now, when?",
    vi:"Nếu tôi không vì mình thì ai sẽ vì tôi? Nếu tôi chỉ vì bản thân mình thì tôi là gì? Và nếu không phải bây giờ thì bao giờ?",
    author:"— Rabbi Hillel"
},

{
    en:"Everything has beauty, but not everyone can see.",
    vi:"Mọi thứ đều có vẻ đẹp riêng, nhưng không phải ai cũng nhìn thấy điều đó.",
    author:"— Confucius"
},

{
    en:"If opportunity doesn't knock, build a door.",
    vi:"Nếu cơ hội không gõ cửa, hãy tự xây một cánh cửa.",
    author:"— Milton Berle"
},

{
    en:"Do not let what you cannot do interfere with what you can do.",
    vi:"Đừng để điều bạn không thể làm cản trở điều bạn có thể làm.",
    author:"— John Wooden"
},

{
    en:"The purpose of our lives is to be happy.",
    vi:"Mục đích của cuộc đời là được hạnh phúc.",
    author:"— Dalai Lama"
},

{
    en:"Life is what happens when you're busy making other plans.",
    vi:"Cuộc đời là những gì xảy ra khi bạn đang bận với những kế hoạch khác.",
    author:"— John Lennon"
},

{
    en:"Get busy living or get busy dying.",
    vi:"Hãy bận rộn để sống, hoặc bận rộn để lụi tàn.",
    author:"— Stephen King"
},

{
    en:"You only live once, but if you do it right, once is enough.",
    vi:"Bạn chỉ sống một lần, nhưng nếu sống đúng cách thì một lần là đủ.",
    author:"— Mae West"
},

{
    en:"Many of life's failures are people who did not realize how close they were to success when they gave up.",
    vi:"Nhiều người thất bại vì không nhận ra mình đã ở rất gần thành công khi họ từ bỏ.",
    author:"— Thomas A. Edison"
},

{
    en:"Not how long, but how well you have lived is the main thing.",
    vi:"Điều quan trọng không phải là sống bao lâu, mà là sống tốt như thế nào.",
    author:"— Seneca"
},

{
    en:"The whole secret of a successful life is to find out what is one's destiny to do, and then do it.",
    vi:"Bí quyết của một cuộc đời thành công là tìm ra điều mình sinh ra để làm rồi kiên trì thực hiện nó.",
    author:"— Henry Ford"
},

{
    en:"In order to write about life, first you must live it.",
    vi:"Muốn viết về cuộc đời thì trước tiên bạn phải sống với nó.",
    author:"— Ernest Hemingway"
},

{
    en:"The big lesson in life, baby, is never be scared of anyone or anything.",
    vi:"Bài học lớn nhất trong cuộc đời là đừng bao giờ sợ bất kỳ ai hay bất kỳ điều gì.",
    author:"— Frank Sinatra"
},

{
    en:"Sing like no one's listening, love like you've never been hurt, dance like nobody's watching, and live like it's heaven on earth.",
    vi:"Hãy hát như không ai đang lắng nghe, yêu như chưa từng tổn thương, nhảy như không ai đang nhìn và sống như thể thiên đường đang ở trên mặt đất.",
    author:"— Unknown"
},

{
    en:"Curiosity about life in all of its aspects, I think, is still the secret of great creative people.",
    vi:"Theo tôi, sự tò mò về cuộc sống ở mọi khía cạnh chính là bí quyết của những con người sáng tạo vĩ đại.",
    author:"— Leo Burnett"
},

{
    en:"Life is not a problem to be solved, but a reality to be experienced.",
    vi:"Cuộc sống không phải là một vấn đề cần giải quyết mà là một thực tại cần được trải nghiệm.",
    author:"— Søren Kierkegaard"
},

{
    en:"The unexamined life is not worth living.",
    vi:"Một cuộc đời không được suy ngẫm thì không đáng để sống.",
    author:"— Socrates"
}

];

const popup=document.getElementById("quotePopup");

const quoteText = document.getElementById("quoteText");

const quoteVi = document.getElementById("quoteVi");

const quoteAuthor = document.getElementById("quoteAuthor");

const exploreBtn=document.querySelector(".explore-btn");

const closeBtn=document.getElementById("closePopup");

function randomQuote(){

    const index = Math.floor(Math.random()*quotes.length);

    quoteText.textContent = quotes[index].en;

    quoteVi.textContent = quotes[index].vi;

    quoteAuthor.textContent = quotes[index].author;

}

if (popup && exploreBtn && closeBtn){

    exploreBtn.addEventListener("click", () => {

        randomQuote();

        popup.classList.add("show");

    });

    closeBtn.addEventListener("click", () => {

        popup.classList.remove("show");


    });

    popup.addEventListener("click", (e) => {

        if(e.target === popup){

            popup.classList.remove("show");

        }

    });

} 