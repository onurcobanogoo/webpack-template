class BackToTop {
    backToTopBtn;

    constructor() {
        this.backToTopBtn = document.querySelector('.o-backtotop')! as HTMLDivElement;

        this.event()
    }

    event() {
        let self = this;

        window.onscroll = function () {
            self.scrollFunction();
        };

        this.backToTopBtn.addEventListener("click", self.scrollOperations)
    }

    scrollFunction(){
        if (document.documentElement.scrollTop > 80) {
            this.backToTopBtn.classList.add('o-backtotop--active');
        } else {
            this.backToTopBtn.classList.remove('o-backtotop--active');
        }
    }

    scrollOperations() {
        document.body.scrollIntoView({
            behavior: "smooth",
        });
    }
}

export default BackToTop;