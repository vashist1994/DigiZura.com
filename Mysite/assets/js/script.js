! function(o) {
	o(document).ready(function() {
		o(".dot").slick({
			dots: !0,
			autoplay: !0,
			autoplaySpeed: 4500
		});
		o(window).scroll(function() {
			o(this).scrollTop() > 250 ? o(".top").fadeIn(500) : o(".top").fadeOut(500)
		}), o(".top").click(function() {
			o("html,body").animate({
				scrollTop: 0
			}, 500)
		}), o(".rapid-banner a").click(function() {
			o("html,body").animate({
				scrollTop: o("#features").offset().top
			}, 1e3)
		}), o(".scroll-down").click(function() {
			o("html, body").animate({
				scrollTop: o("#about-section").offset().top
			}, "slow")
		}), o.fn.menumaker = function(n) {
			var s = o(this),
			e = o.extend({
				format: "dropdown",
				sticky: !1
			}, n);
			return this.each(function() {
				return o(this).find(".button").on("click", function() {
					o(this).toggleClass("menu-opened");
					var n = o(this).next("ul");
					n.hasClass("open") ? n.slideToggle().removeClass("open") : (n.slideToggle().addClass("open"), "dropdown" === e.format && n.find("ul").show())
				}), s.find("li ul").parent().addClass("has-sub"), multiTg = function() {
					s.find(".has-sub").prepend('<span class="submenu-button"></span>'), s.find(".submenu-button").on("click", function() {
						o(this).toggleClass("submenu-opened"), o(this).siblings("ul").hasClass("open") ? o(this).siblings("ul").removeClass("open").slideToggle() : o(this).siblings("ul").addClass("open").slideToggle()
					})
				}, "multitoggle" === e.format ? multiTg() : s.addClass("dropdown"), !0 === e.sticky && s.css("position", "fixed"), resizeFix = function() {
					o(window).width() > 1e3 && s.find("ul").show(), o(window).width() <= 1e3 && s.find("ul").hide().removeClass("open")
				}, resizeFix(), o(window).on("resize", resizeFix)
			})
		}, o(document).ready(function() {
			o("#cssmenu").menumaker({
				format: "multitoggle"
			})
		})
	})
}(jQuery);