<template>
<div class="content feedback">
  <header class="bar bar-nav">
    <a class="button button-link button-nav pull-left" v-link="{path: '/more', replace: true}">
    <span class="icon icon-left"></span>
    </a>
    <h1 class="title" v-text="title"></h1>
  </header>
<!--<div class="row sub-title">
    欢迎每一位用户提出留言与建议
  </div> -->
  <div class="content-block">
    <div class="feedback-label">
      <span style="color:red">*</span> 反馈内容：
    </div>
    <div class="item-input">
      <textarea rows="7" placeholder="请输入反馈内容，不得少于五个字"></textarea>
    </div>
    <div class="feedback-label">
      如需帮助，请留下您的联系电话或邮箱，谢谢！
    </div>
    <div class="feedback-input">
      <input type="text" placeholder="电话">
      <input type="text" placeholder="邮箱">
    </div>
  </div>
  <div class="submit-button">
    <button class="button button-big button-fill">提交</button>
  </div>
</div>
</template>

<script>
export default {
  ready () {
  },
  data () {
    return {
      title: '意见反馈'
    }
  }
}
</script>

<style>
.sub-title {
  margin-top: 2.2rem;
  background-color: white;
  height: 2.2rem;
  font-size: .8rem;
  font-weight: normal;
  line-height: 2.2rem;
  text-align: center;
  border-bottom: 1px solid #d8d8d9;
}
.feedback .content-block {
  margin: 2.3rem 0 0 0;
  padding: 0 .45rem;
}
.feedback-label {
  font-size: .7rem;
  line-height: 1.2rem;
}
.feedback-input input{
  width: 100%;
  height: 2.15rem;
  font-size: .7rem;
  padding: .4rem .5rem;
  background-color: #fff;
  margin-bottom: .3rem;
  border: 1px solid rgba(0,0,0,.2);
  border-radius: .2rem;
}
.feedback textarea {
  height: auto;
  resize: none;
  width: 100%;
  font-size: .7rem;
  -webkit-appearance: none;
  padding: .4rem .5rem;
  -webkit-user-select: text;
  background-color: #fff;
  border: 1px solid rgba(0,0,0,.2);
  border-radius: .2rem;
  outline: 0;
}
.feedback .submit-button {
  margin-top: .8rem;
  width: 100%;
  padding: 0 .45rem;
}
.feedback .submit-button button {
  background-color: #ed8e07;
  width: 100%;
  line-height: 2.1rem !important;
  height: 2.1rem !important;
}
</style>