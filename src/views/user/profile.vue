<template>
<div class="content profile">
  <header class="bar bar-nav">
    <a class="button button-link button-nav pull-left" v-link="{path: '/user', replace: true}">
    <span class="icon icon-left"></span>
    </a>
    <h1 class="title">个人资料</h1>
  </header>
  <div class="list-block">
    <ul>
      <li style="height: 3rem;">
        <div class="item-content" style="min-height: 3rem;">
          <div class="item-media"><img src="../../assets/img/logo.png" height="auto" style='width: 2.2rem;'></div>
          <div class="item-inner" style="min-height: 3rem;">
            <div class="item-title-row">
            </div>
            <div class="item-subtitle">头像</div>
          </div>
        </div>
      </li>
      <li>
        <div class="item-content">
            <div class="item-inner">
                <div class="item-title label">昵称</div>
                <div class="item-input">
                    <input id="nickname" type="text" name="nickname" placeholder="用户昵称" value="abc">
                </div>
            </div>
        </div>
      </li>
    </ul>
    <ul style="margin-top:.5rem;">
      <li>
        <div class="item-content">
            <div class="item-inner">
                <div class="item-title label">我的邀请ID</div>
                <div class="item-input">
                    <input id="name" type="text" name="name" placeholder="邀请ID" value="76167" readonly="true">
                </div>
            </div>
        </div>
      </li>
      <li>
        <div class="item-content">
            <div class="item-inner">
                <div class="item-title label">真实姓名</div>
                <div class="item-input">
                    <input id="name" type="text" name="name" placeholder="请输入真实姓名" value="一二三">
                </div>
            </div>
        </div>
      </li>
      <li>
        <div class="item-content">
            <div class="item-inner">
                <div class="item-title label">微信号</div>
                <div class="item-input">
                    <input id="name" type="text" name="name" placeholder="请输入微信号" value="hhhh">
                </div>
            </div>
        </div>
      </li>
      <li>
        <div class="item-content">
            <div class="item-inner">
                <div class="item-title label">性别</div>
                <div class="item-input">
                    <select name="sex">
                        <option selected>男</option>
                        <option >女</option>
                    </select>
                </div>
            </div>
        </div>
      </li>
      <li>
          <div class="item-content">
              <div class="item-inner">
                  <div class="item-title label">年龄</div>
                  <div class="item-input">
                      <input id="age" type="number" name="age" placeholder="年龄">
                  </div>
              </div>
          </div>
      </li>
    </ul>
    <ul style="margin-top:.5rem">
      <li>
        <div class="item-link item-content">
            <div class="item-inner">
                <div class="item-title label">手机号</div>
                <div class="item-input">
                    <input id="phone" type="text"  name="phone" placeholder="手机号" >
                </div>
            </div>
        </div>
      </li>
      <li>
          <div class="item-content">
              <div class="item-inner">
                  <div class="item-title label">职业</div>
                  <div class="item-input">
                      <input id="occupation" type="text" name="occupation" placeholder="职业">
                  </div>
              </div>
          </div>
      </li>
      <li>
          <div class="item-content">
              <div class="item-inner">
                  <div class="item-title label">地址</div>
                  <div class="item-input">
                      <textarea id="address" name="address" placeholder="地址" ></textarea>
                  </div>
              </div>
          </div>
      </li>
    </ul>
  </div>
  <div class="submit-button">
    <button class="button button-big button-fill">保存</button>
  </div>
</div>
</template>


<style>
.profile .list-block {
  margin: 2.4rem 0 1rem 0;
  font-size: .65rem;
}
.profile .list-block .item-subtitle {
  font-size: .65rem;
}
.profile .list-block .item-input {
  margin-top: .06rem;
  margin-bottom: .06rem;
}
.profile .list-block input {
  font-size: .65rem;
}
.profile .list-block select {
  font-size: .65rem;
}
.profile .list-block textarea {
  font-size: .65rem;
}
.profile .list-block .item-title.label  {
  width: 30%;
}
.profile .submit-button {
  margin: 0 auto 2rem auto;
  width: 100%;
  padding: 0 .45rem;
}
.profile .submit-button button {
  background-color: #ed8e07;
  width: 100%;
  line-height: 2.1rem !important;
  height: 2.1rem !important;
}
</style>
