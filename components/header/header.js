class customHeader extends HTMLElement{
    constructor(){
        super();    
    }

    place
    sHome

    static get observedAttributes(){
        retutn ['select']
    }

    
    connectedCallback() {
        let place = window.location.pathname;
        switch(place){
            case '/index.html':
                this.sHome = 'selected';
            break;
        }
        this.innerHTML = `
        <!DOCTYPE html>
        <head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css">
        </head>

        <style>
        *{
            padding: 0;
            margin: 0;
            box-sizing: border-box;
            font-family: sans-serif;
        }
        
        
        .call_now{
            display: flex !important;
            flex-direction: row !important;
        }
        .cart_items{
            display: flex !important;
            flex-direction: row !important;
            justify-content: flex-end;
            padding-right: .5rem;
        }
        
        .call_now span{
            font-size: 14px;
            font-weight: 100;
        }
        
        .phone_number{
            letter-spacing: 1px;
        }
        
        .header_div{
            width: 100%;
            height: 200px;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        
        .header_div img{
            height: 50%;
        }
        
        .svg_phone{
            height: 15px!important;
            width: 15px!important;
        }
        .bag{
            width: 13px;
            margin-right: 5px;
        }
        
        
        .logo_row{
            width: 90%;
            height: 70%;
            display: flex;
            justify-content:space-between;
            align-items: center;
            border-bottom: 0.1px solid rgba(1,1,1,.1);}
        
        .logo_row div{
            width: 276px;
            display: flex;
            flex-direction: column;
        }
        
        .logo_row .contact{
            align-items: flex-start;
        }
        .logo_row .cart{
            align-items: flex-end;
        }
        
        
        
        .nav_row{
            width: 100%;
            height: 30%;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0 15%;
        }
        
        .arrow{
            margin-top: -10px;
            margin-left: 10px;
            width: 15px;
            transition: fill 0.5s ease;
        }
        
        
        .nav_row div{
            font-size: 14px;
            height: 50px;
            padding: 0 25px;
            display: flex;
            align-items: center;
            text-transform: uppercase;
            text-decoration: none;
            color: black;
            font-weight: 600;
            transition: background-color 0.5s ease;
            margin-top: 15px;
        }
        
        .nav_row div:hover{
            background-color: RGBA(0,0,0,0.05);
            color: rgb(0,146,136);
            fill: rgb(0,146,136);
        }
        .selected{
            background-color: RGBA(0,0,0,0.05);
            color: rgb(0,146,136) !important;
        }
    </style>


        <div class="header_div">
        <div class="logo_row">
            <div class="contact">
                <div class="call_now">
                <svg class="svg_phone" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z"/></svg>
                    <span>CALL NOW</span>
                </div>
                <h4 class="phone_number">123456789</h4>
            </div>

            <img src="https://sarahssnacks.com/wp-content/uploads/2019/10/head-logo.png">

           <div class="cart">
            <div class="cart_items">
            <svg class="bag" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M112 112C112 50.14 162.1 0 224 0C285.9 0 336 50.14 336 112V160H400C426.5 160 448 181.5 448 208V416C448 469 405 512 352 512H96C42.98 512 0 469 0 416V208C0 181.5 21.49 160 48 160H112V112zM160 160H288V112C288 76.65 259.3 48 224 48C188.7 48 160 76.65 160 112V160zM136 256C149.3 256 160 245.3 160 232C160 218.7 149.3 208 136 208C122.7 208 112 218.7 112 232C112 245.3 122.7 256 136 256zM312 208C298.7 208 288 218.7 288 232C288 245.3 298.7 256 312 256C325.3 256 336 245.3 336 232C336 218.7 325.3 208 312 208z"/></svg>
                <span>0</span>
            </div>
            <h4 class="phone_number">$0.00</h4>
           </div>
        </div>

        <div class="nav_row">
            <div class="home ${this.sHome}">home</div>
            <div class="store">store</div>
            <div class="our story">ous story</div>
            <div class="where yo buy">
                where to buy
                <i class="arrow fa-solid fa-sort-down"></i>
            </div>
            <div class="recipes">recipes</div>
            <div class="news">news</div>
            <div class="contact">contact</div>
        </div>
    </div>
    </html>`;
      }
}


window.customElements.define('custom-header', customHeader);