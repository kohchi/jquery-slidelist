/**
 * The slider of listed elements.
 *
 * This is the jquery plugin that slide lists matched the elements.
 * If you use this plugin, you have to set the style to specified elements as
 * follows.
 *  #list { width: 400px; height: 300px; border: 1px slid #ddd; }
 *
 * And you call this plugin. for example:
 *  $('#list').slidelist();
 *
 * You may use this under the terms of either MIT License or
 * GNU General Public License (GPL) Version 2. (same as jQuery).
 *
 * Copyright (c) MIYAGINO.net. All Rights Reserved.
 */
(function($) {
	$.fn.slidelist = function(opts) {
		var default_opts = {
			interval: 4000,
			duration: 2000,
			order: 'asc'
		};

		opts = $.extend(default_opts, opts || {});

		this.css('overflow', 'hidden');

		var children = [];
		this.children().map(function() {
			children.push($(this));
		});

		var slide_asc = function() {
			var o = children.shift();
			var clone = o.clone();

			children.push(clone);
			o.parent().append(clone);
			o.animate({opacity: 0, height: 0}, opts.duration, function() {
				o.remove();
			});
			timer_id = setTimeout(slide_asc, opts.interval);
		}

		var slide_desc = function() {
			var o = children.pop();

			children.unshift(o);
			o.parent().prepend(o.hide().css({opacity: 0}));
			o.animate({opacity: 1, height: 'toggle'}, opts.duration);
			timer_id = setTimeout(slide_desc, opts.interval);
		}

		var slider = opts.order == 'asc' ? slide_asc : slide_desc;
		var timer_id = null;

		var stop_slide = function() {
			if (timer_id) {
				clearTimeout(timer_id);
				timer_id = null;
			}
		}
		var start_slide = function() {
			if (timer_id == null) {
				timer_id = setTimeout(slider, opts.interval);
			}
		}

		this.hover(stop_slide, start_slide);

		return this.each(function() {
			start_slide();
		});
	}
})(jQuery);
