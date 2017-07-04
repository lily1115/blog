
## 2种方法
> 1.利用包裹层，用高度100%来实现
> 2.利用flex + 高度100%来实现

### 第一种
*普通margin负值—兼容IE*
```HTML
html,body {
  height: 100%;
}
    
body .wrap {
  min-height: 100%;
}
    
.content {
  /* padding-bottom 等于 footer 的高度 */
  padding-bottom: 60px;
}
    
.footer {
  width: 100%;
  height: 60px;
  /* margin-top 为 footer 高度的负值 */
  margin-top: -60px;
}
--------------------
	<div class="wrap">
	  <div class="content">
	    <p>填充内容</p>
	  </div>
	</div>
	<div class="footer">
	  <p>这是页脚</p>
	</div>
```
### 第二种 
*flex+高度100%*
```html
body {
  display: flex;
  height: 100%;
  flex-direction: column;
}
main{
  flex: 1;
}
-----------------------
<body>
    <header></header>
    <main>
		<p>填充内容</p>
    	<p>填充内容</p>
    	<p>填充内容</p>
	  </main>
    <footer></footer>
</body>
```
