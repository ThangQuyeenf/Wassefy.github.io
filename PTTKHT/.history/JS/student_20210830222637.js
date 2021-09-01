document.getElementById('innerElement').innerHTML = `
<div class="title">Bảng điểm sinh viên</div>
<ul class="table">
    <div class="line-10"></div>
    <div class="line-20"></div>
    <div class="line-50"></div>
    <div class="line-60"></div>
    <div class="line-70"></div>
    <div class="line-80"></div>
    <div class="line-90"></div>
    <li class="table-header">
        <div class="col col-p10">Học kỳ</div>
        <div class="col col-p10">Mã học phần</div>
        <div class="col col-p30">Tên học phần</div>
        <div class="col col-p10">Tín chỉ</div>
        <div class="col col-p10">Lớp học</div>
        <div class="col col-p10">Điểm QT</div>
        <div class="col col-p10">Điểm thi</div>
        <div class="col col-p10">Điểm chữ</div>
    </li>
    <li class="row underline">
        <div class="col col-p10">
            <i class='bx bx-search'></i>
            <input type="text" class="class-search">
        </div>
        <div class="col col-p10">
            <i class='bx bx-search'></i>
            <input type="text" class="class-search">
        </div>
        <div class="col col-p30">
            <i class='bx bx-search'></i>
            <input type="text" class="class-search">
        </div>
        <div class="col col-p10">
            <i class='bx bx-search'></i>
            <input type="text" class="class-search">
        </div>
        <div class="col col-p10">
            <i class='bx bx-search'></i>
            <input type="text" class="class-search">
        </div>
        <div class="col col-p10">
            <i class='bx bx-search'></i>
            <input type="text" class="class-search">
        </div>
        <div class="col col-p10">
            <i class='bx bx-search'></i>
            <input type="text" class="class-search"></div>
        <div class="col col-p10">
            <i class='bx bx-search'></i>
            <input type="text" class="class-search"></div>
        </div>
    </li>	
    <li class ="row underline">
		<div class = "col col-p10">20181</div>
		<div class = "col col-p10">FL1100</div>
		<div class = "col col-p30">Tiếng Anh 1</div>
		<div class = "col col-p10">0</div>
		<div class = "col col-p10">106602</div>
		<div class = "col col-p10">6.5</div>
		<div class = "col col-p10">7</div>
		<div class = "col col-p10">C+</div>
	</li>
	<li class ="row underline">
		<div class = "col col-p10">20181</div>
		<div class = "col col-p10">MI1111</div>
		<div class = "col col-p30">Giải tích I</div>
		<div class = "col col-p10">4</div>
		<div class = "col col-p10">106937</div>
		<div class = "col col-p10">5</div>
		<div class = "col col-p10">3</div>
		<div class = "col col-p10">F</div>
	</li>
	<li class ="row underline">
		<div class = "col col-p10">20181</div>
		<div class = "col col-p10">MI1141</div>
		<div class = "col col-p30">Đại số</div>
		<div class = "col col-p10">4</div>
		<div class = "col col-p10">106940</div>
		<div class = "col col-p10">8.5</div>
		<div class = "col col-p10">6.5</div>
		<div class = "col col-p10">B</div>
	</li>
	<li class ="row underline">
		<div class = "col col-p10">20181</div>
		<div class = "col col-p10">MI2001</div>
		<div class = "col col-p30">Nhập môn HTTTQL</div>
		<div class = "col col-p10">3</div>
		<div class = "col col-p10">106947</div>
		<div class = "col col-p10">8</div>
		<div class = "col col-p10">7.5</div>
		<div class = "col col-p10">B</div>
	</li>
	<li class ="row underline">
		<div class = "col col-p10">20181</div>
		<div class = "col col-p10">MIL1110</div>
		<div class = "col col-p30">Đường lối quân sự</div>
		<div class = "col col-p10">0</div>
		<div class = "col col-p10">106945</div>
		<div class = "col col-p10">6</div>
		<div class = "col col-p10">6</div>
		<div class = "col col-p10">C</div>
	</li>
	<li class ="row underline">
		<div class = "col col-p10">20181</div>
		<div class = "col col-p10">PE1014</div>
		<div class = "col col-p30">Lý luận TDTT</div>
		<div class = "col col-p10">0</div>
		<div class = "col col-p10">107152</div>
		<div class = "col col-p10"> </div>
		<div class = "col col-p10">9</div>
		<div class = "col col-p10">A</div>
	</li>
	<li class ="row underline">
		<div class = "col col-p10">20181</div>
		<div class = "col col-p10">SSH1110</div>
		<div class = "col col-p30">Những NLCB của CNML I</div>
		<div class = "col col-p10">2</div>
		<div class = "col col-p10">106944</div>
		<div class = "col col-p10">8.5</div>
		<div class = "col col-p10">3.5</div>
		<div class = "col col-p10">D+</div>
	</li>
	<li class= "row underline">
		<div class = "col col-p10">20182</div>
		<div class = "col col-p10">EM1170</div>
		<div class = "col col-p30">Pháp luật đại cương</div>
		<div class = "col col-p10">2</div>
		<div class = "col col-p10">108115</div>
		<div class = "col col-p10">7</div>
		<div class = "col col-p10">5.5</div>
		<div class = "col col-p10">C</div>
	</li>
	<li class ="row underline">
		<div class = "col col-p10">20182</div>
		<div class = "col col-p10">FL1101</div>
		<div class = "col col-p30">Tiếng Anh 2</div>
		<div class = "col col-p10">0</div>
		<div class = "col col-p10">107896</div>
		<div class = "col col-p10">6.5</div>
		<div class = "col col-p10">6.5</div>
		<div class = "col col-p10">C+</div>
	</li>
	<li class= "row underline">
		<div class = "col col-p10">20182</div>
		<div class = "col col-p10">IT1110</div>
		<div class = "col col-p30">Tin học đại cương</div>
		<div class = "col col-p10">4</div>
		<div class = "col col-p10">108114</div>
		<div class = "col col-p10">7</div>
		<div class = "col col-p10">7</div>
		<div class = "col col-p10">B</div>
	</li>
	<li class= "row underline">
		<div class = "col col-p10">20182</div>
		<div class = "col col-p10">MI1121</div>
		<div class = "col col-p30">Giải tích II</div>
		<div class = "col col-p10">3</div>
		<div class = "col col-p10">108102</div>
		<div class = "col col-p10">3.5</div>
		<div class = "col col-p10">1</div>
		<div class = "col col-p10">F</div>
	</li>
	<li class= "row underline">
		<div class = "col col-p10">20182</div>
		<div class = "col col-p10">MI1131</div>
		<div class = "col col-p30">Giải tích III</div>
		<div class = "col col-p10">3</div>
		<div class = "col col-p10">108105</div>
		<div class = "col col-p10">5</div>
		<div class = "col col-p10">5.5</div>
		<div class = "col col-p10">D+</div>
	</li>
	<li class= "row underline">
		<div class = "col col-p10">20182</div>
		<div class = "col col-p10">MIL1120</div>
		<div class = "col col-p30">Công tác quốc phòng-An ninh</div>
		<div class = "col col-p10">0</div>
		<div class = "col col-p10">108116</div>
		<div class = "col col-p10">7</div>
		<div class = "col col-p10">4.5</div>
		<div class = "col col-p10">D+</div>
	</li>
	<li class= "row underline">
		<div class = "col col-p10">20182</div>
		<div class = "col col-p10">PE2301</div>
		<div class = "col col-p30">Bóng rổ 1</div>
		<div class = "col col-p10">0</div>
		<div class = "col col-p10">632008</div
		><div class = "col col-p10"> </div>
		<div class = "col col-p10">6</div>
		<div class = "col col-p10">C</div>
	</li>
	<li class= "row underline">
		<div class = "col col-p10">20182</div>
		<div class = "col col-p10">PH1110</div>
		<div class = "col col-p30">Vật lý đại cương I</div>
		<div class = "col col-p10">3</div>
		<div class = "col col-p10">108109</div>
		<div class = "col col-p10">4</div>
		<div class = "col col-p10">6.5</div>
		<div class = "col col-p10">C</div>
	</li>
	<li class= "row underline">
		<div class = "col col-p10">20182</div>
		<div class = "col col-p10">SSH1120</div>
		<div class = "col col-p30">Những NLCB của CNML II</div>
		<div class = "col col-p10">3</div>
		<div class = "col col-p10">108113</div>
		<div class = "col col-p10">8</div>
		<div class = "col col-p10">4</div>
		<div class = "col col-p10">D+</div>
	</li>
	<li class = "row underline">
		<div class = "col col-p10">20183</div>
		<div class = "col col-p10">MI1111</div>
		<div class = "col col-p30">Giải tích I</div>
		<div class = "col col-p10">4</div>
		<div class = "col col-p10">110152</div>
		<div class = "col col-p10">9</div>
		<div class = "col col-p10">4.5</div>
		<div class = "col col-p10">C</div>
	</li>
	<li class = "row underline">
		<div class = "col col-p10">20191</div>
		<div class = "col col-p10">EM3102</div>
		<div class = "col col-p30">Kinh tế đại cương</div>
		<div class = "col col-p10">3</div>
		<div class = "col col-p10">112187</div>
		<div class = "col col-p10">9</div>
		<div class = "col col-p10">9</div>
		<div class = "col col-p10">A</div>
	</li>
	<li class ="row underline">
		<div class = "col col-p10">20191</div>
		<div class = "col col-p10">MI3010</div>
		<div class = "col col-p30">Toán rời rạc</div>
		<div class = "col col-p10">3</div>
		<div class = "col col-p10">112185</div>
		<div class = "col col-p10">8</div>
		<div class = "col col-p10">4.5</div>
		<div class = "col col-p10">C</div>
	</li>
	<li class ="row underline">
		<div class = "col col-p10">20191</div>
		<div class = "col col-p10">MI3370</div>
		<div class = "col col-p30">Hệ điều hành</div>
		<div class = "col col-p10">2</div>
		<div class = "col col-p10">112186</div>
		<div class = "col col-p10">5</div>
		<div class = "col col-p10">5</div>
		<div class = "col col-p10">D+</div>
	</li>
	<li class ="row underline">
		<div class = "col col-p10">20191</div>
		<div class = "col col-p10">MIL1130</div>
		<div class = "col col-p30">QS chung và KCT bắn súng AK</div>
		<div class = "col col-p10">0</div>
		<div class = "col col-p10">625813</div>
		<div class = "col col-p10">5.5</div>
		<div class = "col col-p10">3.5</div>
		<div class = "col col-p10">D</div>
	</li>
	<li class= "row underline">
		<div class = "col col-p10">20191</div>
		<div class = "col col-p10">PE2302</div>
		<div class = "col col-p30">Bóng rổ 2</div>
		<div class = "col col-p10">0</div>
		<div class = "col col-p10">626573</div>
		<div class = "col col-p10"> </div>
		<div class = "col col-p10">6</div>
		<div class = "col col-p10">C</div>
	</li>
	<li class ="row underline">
		<div class = "col col-p10">20191</div>
		<div class = "col col-p10">PH1120</div>
		<div class = "col col-p30">Vật lý đại cương II</div>
		<div class = "col col-p10">3</div>
		<div class = "col col-p10">112175</div>
		<div class = "col col-p10">8.5</div>
		<div class = "col col-p10">2.5</div>
		<div class = "col col-p10">F</div>
	</li>
	<li class ="row underline">
		<div class = "col col-p10">20191</div>
		<div class = "col col-p10">SSH1050</div>
		<div class = "col col-p30">Tư tưởng HCM</div>
		<div class = "col col-p10">2</div>
		<div class = "col col-p10">112953</div>
		<div class = "col col-p10">8.5</div>
		<div class = "col col-p10">6</div>
		<div class = "col col-p10">C+</div>
	</li>
	<li class ="row underline">
		<div class = "col col-p10">20192</div>
		<div class = "col col-p10">EM1010</div>
		<div class = "col col-p30">Quản trị học đại cương</div>
		<div class = "col col-p10">2</div>
		<div class = "col col-p10">116893</div>
		<div class = "col col-p10">9</div>
		<div class = "col col-p10">9</div>
		<div class = "col col-p10">A</div>
	</li>
	<li class ="row underline">
		<div class = "col col-p10">20192</div>
		<div class = "col col-p10">EM3190</div>
		<div class = "col col-p30">Hành vi của tổ chức</div>
		<div class = "col col-p10">2</div>
		<div class = "col col-p10">116437</div>
		<div class = "col col-p10">8</div>
		<div class = "col col-p10">7</div>
		<div class = "col col-p10">B</div>
	</li>
	<li class ="row underline">
		<div class = "col col-p10">20192</div>
		<div class = "col col-p10">MI1121</div>
		<div class = "col col-p30">Giải tích II</div>
		<div class = "col col-p10">3</div>
		<div class = "col col-p10">115374</div>
		<div class = "col col-p10">5</div>
		<div class = "col col-p10">5</div>
		<div class = "col col-p10">D+</div>
	</li>
	<li class ="row underline">
		<div class = "col col-p10">20192</div>
		<div class = "col col-p10">MI2020</div>
		<div class = "col col-p30">Xác suất thống kê</div>
		<div class = "col col-p10">3</div>
		<div class = "col col-p10">116435</div>
		<div class = "col col-p10">7</div>
		<div class = "col col-p10">5.5</div>
		<div class = "col col-p10">C</div>
	</li>
	<li class= "row underline">
		<div class = "col col-p10">20192</div>
		<div class = "col col-p10">MI3041</div>
		<div class = "col col-p30">Giải tích số</div>
		<div class = "col col-p10">2</div>
		<div class = "col col-p10">116438</div>
		<div class = "col col-p10">10</div>
		<div class = "col col-p10">4</div>
		<div class = "col col-p10">C</div>
	</li>
	<li class ="row underline">
		<div class = "col col-p10">20192</div>
		<div class = "col col-p10">MI3060</div>
		<div class = "col col-p30">Cấu trúc dữ liệu và giải thuật</div>
		<div class = "col col-p10">3</div>
		<div class = "col col-p10">116440</div>
		<div class = "col col-p10">8</div>
		<div class = "col col-p10">5.5</div>
		<div class = "col col-p10">C</div>
	</li>
	<li class= "row underline">
		<div class = "col col-p10">20192</div>
		<div class = "col col-p10">MI3090</div>
		<div class = "col col-p30">Cơ sở dữ liệu</div>
		<div class = "col col-p10">3</div>
		<div class = "col col-p10">116443</div>
		<div class = "col col-p10">6.5</div>
		<div class = "col col-p10">7.5</div>
		<div class = "col col-p10">B</div>
	</li>
	<li class= "row underline">
		<div class = "col col-p10">20192</div>
		<div class = "col col-p10">MI3310</div>
		<div class = "col col-p30">Kỹ thuật lập trình</div>
		<div class = "col col-p10">2</div>
		<div class = "col col-p10">116444</div>
		<div class = "col col-p10">9</div>
		<div class = "col col-p10">9</div>
		<div class = "col col-p10">A</div>
	</li>
	<li class ="row underline">
		<div class = "col col-p10">20193</div>
		<div class = "col col-p10">EM1180</div>
		<div class = "col col-p30">Văn hóa kinh doanh và tinh thần khởi nghiệp</div>
		<div class = "col col-p10">2</div>
		<div class = "col col-p10">117570</div>
		<div class = "col col-p10">9</div>
		<div class = "col col-p10">9</div>
		<div class = "col col-p10">A</div>
	</li>
	<li class= "row underline">
		<div class = "col col-p10">20193</div>
		<div class = "col col-p10">PH1120</div>
		<div class = "col col-p30">Vật lý đại cương II</div>
		<div class = "col col-p10">3</div>
		<div class = "col col-p10">117475</div>
		<div class = "col col-p10">7</div>
		<div class = "col col-p10">6</div>
		<div class = "col col-p10">C</div>
	</li>
	<li class ="row underline">
		<div class = "col col-p10">20201</div>
		<div class = "col col-p10">EM3211</div>
		<div class = "col col-p30">Nguyên lý marketing</div>
		<div class = "col col-p10">3</div>
		<div class = "col col-p10">119635</div>
		<div class = "col col-p10">7.5</div>
		<div class = "col col-p10">6.5</div>
		<div class = "col col-p10">C+</div>
	</li>
	<li class ="row underline">
		<div class = "col col-p10">20201</div>
		<div class = "col col-p10">EM4527</div>
		<div class = "col col-p30">Kế toán doanh nghiệp</div>
		<div class = "col col-p10">3</div>
		<div class = "col col-p10">119637</div>
		<div class = "col col-p10">9</div>
		<div class = "col col-p10">7</div>
		<div class = "col col-p10">B</div>
	</li>
	<li class= "row underline">
		<div class = "col col-p10">20201</div>
		<div class = "col col-p10">MI3031</div>
		<div class = "col col-p30">Suy luận thống kê</div>
		<div class = "col col-p10">3</div>
		<div class = "col col-p10">119633</div>
		<div class = "col col-p10">10</div>
		<div class = "col col-p10">6.5</div>
		<div class = "col col-p10">B</div>
	</li>
	<li class= "row underline">
		<div class = "col col-p10">20201</div>
		<div class = "col col-p10">MI3130</div>
		<div class = "col col-p30">Toán kinh tế</div>
		<div class = "col col-p10">3</div>
		<div class = "col col-p10">119638</div>
		<div class = "col col-p10">9.5</div>
		<div class = "col col-p10">7.5</div>
		<div class = "col col-p10">B+</div>
	</li>
	<li class= "row underline">
		<div class = "col col-p10">20201</div>
		<div class = "col col-p10">MI4024</div>
		<div class = "col col-p30">Phân tích số liệu</div>
		<div class = "col col-p10">2</div>
		<div class = "col col-p10">119624</div>
		<div class = "col col-p10">10</div>
		<div class = "col col-p10">7</div>
		<div class = "col col-p10">B</div>
	</li>
	<li class ="row underline">
		<div class = "col col-p10">20201</div>
		<div class = "col col-p10">MI4060</div>
		<div class = "col col-p30">Hệ thống và mạng máy tính</div>
		<div class = "col col-p10">3</div>
		<div class = "col col-p10">119634</div>
		<div class = "col col-p10">7.5</div>
		<div class = "col col-p10">6</div>
		<div class = "col col-p10">C+</div>
	</li>
	<li class ="row underline">
		<div class = "col col-p10">20201</div>
		<div class = "col col-p10">MI4090</div>
		<div class = "col col-p30">Lập trình hướng đối tượng</div>
		<div class = "col col-p10">3</div>
		<div class = "col col-p10">119627</div>
		<div class = "col col-p10">9</div>
		<div class = "col col-p10">9.5</div>
		<div class = "col col-p10">A</div>
	</li>
	<li class ="row">
		<div class = "col col-p10">20201</div>
		<div class = "col col-p10">MI4344</div>
		<div class = "col col-p30">Kiến trúc máy tính</div>
		<div class = "col col-p10">2</div>
		<div class = "col col-p10">119625</div>
		<div class = "col col-p10">9</div>
		<div class = "col col-p10">8</div>
		<div class = "col col-p10">B+</div>
	</li>
	<li class= "row underline">
		<div class = "col col-p10">20202</div>
		<div class = "col col-p10">MI3380</div>
		<div class = "col col-p30">Đồ án I</div>
		<div class = "col col-p10">3</div>
		<div class = "col col-p10">705483</div>
		<div class = "col col-p10">9.5</div>
		<div class = "col col-p10">8.5</div>
		<div class = "col col-p10">A</div>
	</li>
</ul>
`;

