import $ from 'zepto'

export default {
  params: ['action', 'distance'],
  bind () {
    let el = $(this.el)
    el.addClass('content')
    el.addClass('pull-to-refresh-content')
    el.attr('data-ptr-distance', this.params.distance)
    $(el).on('refresh', function (e) {
      this.vm[this.params.action]()
    }.bind(this))
  }
}

