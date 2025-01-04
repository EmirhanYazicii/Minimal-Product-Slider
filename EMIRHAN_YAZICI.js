(() => {
    const init = () => {
        if (document.querySelector('.product-detail')) {
            buildHTML();
            buildCSS();
            setEvents();
        }
    };

    const buildHTML = () => {
        fetch('https://gist.githubusercontent.com/sevindi/5765c5812bbc8238a38b3cf52f233651/raw/56261d81af8561bf0a7cf692fe572f9e1e91f372/products.json')
            .then(response => response.json())
            .then(data => {
                const container = document.createElement('div');
                container.id = 'alsoLike';

                const recommendationCarousel = document.createElement('div');
                recommendationCarousel.classList.add('recommendation-carousel');

                const carouselContainer = document.createElement('div');
                carouselContainer.classList.add('carousel-container');

                const title = document.createElement('p');
                title.classList.add('combine-products-title');
                title.textContent = 'You Might Also Like';

                const carouselDiv = document.createElement('div');
                carouselDiv.classList.add('carousel', 'padded-carousel');

                const previousButton = document.createElement('button');
                previousButton.classList.add('buttonBack___1mlaL', 'carousel__back-button', 'carousel-arrow', 'carousel-arrow-left');

                carouselDiv.appendChild(previousButton);

                const previousSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                previousSvg.setAttribute('width', '14.242');
                previousSvg.setAttribute('height', '24.242');
                previousSvg.setAttribute('viewBox', '0 0 14.242 24.242');

                const previousPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                previousPath.setAttribute('fill', 'none');
                previousPath.setAttribute('stroke', '#333');
                previousPath.setAttribute('stroke-linecap', 'round');
                previousPath.setAttribute('stroke-width', '3px');
                previousPath.setAttribute('d', 'M2106.842 2395.467l-10 10 10 10');
                previousPath.setAttribute('transform', 'translate(-2094.721 -2393.346)');

                previousSvg.appendChild(previousPath);
                previousButton.appendChild(previousSvg);

                const newDiv = document.createElement('div');
                newDiv.classList.add('horizontalSlider___281Ls', 'carousel__slider', 'carousel__slider--horizontal');

                const trayWrapperDiv = document.createElement('div');
                trayWrapperDiv.classList.add('carousel__slider-tray-wrapper', 'carousel__slider-tray-wrap--horizontal');

                const newTrayDiv = document.createElement('div');
                newTrayDiv.classList.add('sliderTray___-vHFQ', 'sliderAnimation___300FY', 'carousel__slider-tray', 'carousel__slider-tray--horizontal');
                newTrayDiv.style.cssText = `
                    display: flex;
                    align-items: stretch;
                    flex-direction: row;
                    gap: 20px;
                `;

                trayWrapperDiv.appendChild(newTrayDiv);

                carouselContainer.appendChild(title);
                carouselContainer.appendChild(carouselDiv);
                recommendationCarousel.appendChild(carouselContainer);
                container.appendChild(recommendationCarousel);

                const productDetail = document.querySelector('.product-detail');
                productDetail.insertAdjacentElement('afterend', container);
                
                var i = 0;
                data.forEach(product => {
                    const slideHorizontal___1NzNV = document.createElement('div');
                    slideHorizontal___1NzNV.classList.add('slide___3-Nqo', 'slideHorizontal___1NzNV', 'carousel__slide', 'carousel__slide--hidden');

                    newTrayDiv.appendChild(slideHorizontal___1NzNV);

                    const slideInner = document.createElement('div');
                    slideInner.classList.add('slideInner___2mfX9', 'carousel__inner-slide');

                    slideHorizontal___1NzNV.appendChild(slideInner);

                    const productDiv = document.createElement('div');
                    productDiv.classList.add('new-product-card');
                    productDiv.setAttribute('id', data[i].id);

                    const informationDiv = document.createElement('div');
                    informationDiv.classList.add('new-product-card__information-box');

                    slideHorizontal___1NzNV.style.cssText = `padding-bottom: unset; height: unset;`;
                    slideInner.style.cssText = `position: unset;`;

                    slideInner.appendChild(productDiv);
                    productDiv.appendChild(informationDiv);

                    const imageContainer = document.createElement('a');
                    imageContainer.href = data[i].url;

                    const productImage = document.createElement('img');
                    productImage.src = product.img;
                    productImage.alt = product.name;
                    productImage.classList.add('product-image', 'ls-is-cached', 'lazyloaded');

                    const heartIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                    heartIcon.setAttribute("width", "30");
                    heartIcon.setAttribute("height", "30");
                    heartIcon.setAttribute("viewBox", "0 0 25 25");
                    heartIcon.setAttribute("fill", "none");
                    heartIcon.style.cssText = `
                        position: absolute;
                        top: 5%;
                        right: 5%;
                        z-index: 10;
                        cursor: pointer;
                        width: 30px;
                        height: 30px;
                    `;

                    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
                    path.setAttribute("d", "M24.7 8.684c-.364-3.974-3.177-6.858-6.7-6.858a6.655 6.655 0 0 0-5.7 3.285 6.413 6.413 0 0 0-5.564-3.285C3.216 1.826.4 4.71.042 8.684a7.072 7.072 0 0 0 .21 2.606 11.178 11.178 0 0 0 3.425 5.715l8.618 7.821 8.766-7.82a11.18 11.18 0 0 0 3.425-5.716 7.087 7.087 0 0 0 .214-2.606z");
                    path.setAttribute("style", "fill: rgb(255, 255, 255); stroke: rgb(155, 155, 155);");
                    path.setAttribute("id", "like-btn");
                    path.setAttribute("p-id", data[i].id);


                    heartIcon.appendChild(path);
                    imageContainer.appendChild(productImage);
                    productDiv.appendChild(heartIcon);

                    productDiv.innerHTML += `
                        <div class="new-product-card__image-wrapper" style="position:relative;">${imageContainer.outerHTML}</div>
                        <div class="new-product-card__information-box">
                            <div class="new-product-card__information-box__title">
                            <p class="product-name">${product.name}</p></div>
                            <div class="new-product-card__price">
                                <div class="price__current-price">${product.price} TL</div>
                            </div>
                            <div class="new-product-card__information-box__add-to-cart">
                            <button class="product-add-to-cart">Sepete Ekle</button>
                            </div>
                        </div>
                    `;

                    i += 1;
                });

                newDiv.appendChild(trayWrapperDiv);
                carouselDiv.appendChild(newDiv);

                const nextButton = document.createElement('button');
                nextButton.classList.add('buttonNext___2mOCa', 'carousel__next-button', 'carousel-arrow', 'carousel-arrow-right', 'rotate-180');

                carouselDiv.appendChild(nextButton);

                const nextSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                nextSvg.setAttribute('width', '14.242');
                nextSvg.setAttribute('height', '24.242');
                nextSvg.setAttribute('viewBox', '0 0 14.242 24.242');

                const nextPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                nextPath.setAttribute('fill', 'none');
                nextPath.setAttribute('stroke', '#333');
                nextPath.setAttribute('stroke-linecap', 'round');
                nextPath.setAttribute('stroke-width', '3px');
                nextPath.setAttribute('d', 'M2106.842 2395.467l-10 10 10 10');
                nextPath.setAttribute('transform', 'translate(-2094.721 -2393.346)');

                nextSvg.appendChild(nextPath);
                nextButton.appendChild(nextSvg);

                updateHeartStates();
            })
            .catch(error => console.error('Error fetching the data:', error));
    };

    const buildCSS = () => {
        const css = `
            #alsoLike .carousel__slider-tray {
                display: flex;
                overflow-x: auto;
                scroll-behavior: smooth;
                scrollbar-width: none; /* Firefox için */
            }
            #alsoLike .carousel__slider-tray::-webkit-scrollbar {
                display: none; /* Chrome, Safari ve Edge için */
            }
            #alsoLike .product-add-to-cart {
                display: none;
            }
            @media (max-width: 912px) {
                #alsoLike .product-add-to-cart {
                    display: block;
                }
            }
        `;
        const style = document.createElement('style');
        style.textContent = css;
        document.head.appendChild(style);
    };

    const setEvents = () => {
        document.body.addEventListener('click', (event) => {
            const tray = document.querySelector('.carousel__slider-tray');
            if (!tray) return;

            if (event.target.closest('.carousel__next-button')) {
                tray.scrollLeft += 230;
            }

            if (event.target.closest('.carousel__back-button')) {
                tray.scrollLeft -= 230;
            }
        });
    
        document.body.addEventListener('click', (event) => {
            const path = event.target.closest('path');
            if (path && path.id === 'like-btn') {
                const productId = path.getAttribute('p-id');
                const likes = JSON.parse(localStorage.getItem('likes')) || {};
                
                if (path.getAttribute('fill') === 'white' || path.getAttribute('fill') === '') {
                    path.setAttribute('fill', 'blue');
                    path.style.setProperty('fill', 'blue', 'important');
                    likes[productId] = 1;
                } else {
                    path.setAttribute('fill', 'white');
                    path.style.setProperty('fill', 'white', 'important');
                    delete likes[productId];
                }
        
                localStorage.setItem('likes', JSON.stringify(likes));
            }
        });
        
    };
    
    const updateHeartStates = () => {
        const likes = JSON.parse(localStorage.getItem('likes')) || {};
        document.querySelectorAll('path#like-btn').forEach(path => {
            const productId = path.getAttribute('p-id');
            if (likes[productId]) {
                path.setAttribute('fill', 'blue');
                path.style.setProperty('fill', 'blue', 'important');
            } else {
                path.setAttribute('fill', 'white');
                path.style.setProperty('fill', 'white', 'important');
            }
        });
    };

    init();
})();

