// JavaScript Document - CPCE Calendar 2026

function set_cookie(name, value, days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
		var expires = "; expires=" + date.toGMTString();
	} else {
		var expires = "";
	}
	document.cookie = name + "=" + value + expires + "; path=/";
}

function get_cookie(name) {
	var name_eq = name + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') c = c.substring(1, c.length);
		if (c.indexOf(name_eq) == 0) return c.substring(name_eq.length, c.length);
	}
	return null;
}

function getParam(name) {
	var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(window.location.href);
	if (!results) { return null; }
	return results[1] || null;
}

function getImageTag(m) {
	var altTexts = {
		"01": "一月 從小培養好習慣，傑出公民人人讚。每月一行動：培養良好品德和行為習慣，成為具誠信和正向品格的公民。日曆顯示2026年1月，1日為元旦。插圖展示了臘八粥，以及卡通人物泥貓和小泥子。",
		"02": "二月 傳承中華文化，共創美好未來。每月一行動：認識和欣賞中華傳統文化，積極傳承優秀文化遺產。日曆顯示2026年2月，17日至19日為農曆新年假期。",
		"03": "三月 關愛社區，守望相助。每月一行動：主動關心身邊的人，為社區出一分力，建立互助共融的社會。日曆顯示2026年3月。",
		"04": "四月 培育良好公民，認同國民身分。每月一行動：尊重國家主權，認同國民身分，自覺維護民族團結。日曆顯示2026年4月，3日為耶穌受難節，4日為耶穌受難節翌日，6日為清明節翌日，7日為復活節星期一翌日。插圖展示了放風箏的場景。",
		"05": "五月 維護法治，共建和諧社會。每月一行動：遵守法律法規，尊重他人權益，共同維護社會秩序。日曆顯示2026年5月，1日為勞動節，25日為佛誕翌日。",
		"06": "六月 維護國家安全，人人有責。每月一行動：認識維護國家安全的重要性，自覺遵守《國家安全法》。日曆顯示2026年6月，19日為端午節。",
		"07": "七月 認識《基本法》，珍惜一國兩制。每月一行動：深入了解《基本法》的精神，珍惜香港的獨特地位。日曆顯示2026年7月，1日為香港特別行政區成立紀念日。",
		"08": "八月 尊重多元文化，包容共融。每月一行動：尊重不同文化背景的人，建立包容共融的社會氛圍。日曆顯示2026年8月。",
		"09": "九月 負責任的公民，為社會作貢獻。每月一行動：積極承擔社會責任，以實際行動回饋社會。日曆顯示2026年9月，26日為中秋節翌日。",
		"10": "十月 認識《憲法》，了解國家根本大法。每月一行動：學習《憲法》知識，了解國家的根本制度和公民權利義務。日曆顯示2026年10月，1日為國慶日，19日為重陽節翌日。",
		"11": "十一月 弘揚中華優秀傳統文化。每月一行動：積極學習和傳播中華優秀傳統文化，增強文化自信。日曆顯示2026年11月。",
		"12": "十二月 關愛家庭，和諧社會從家開始。每月一行動：珍惜家庭關係，以愛心和包容建立幸福家庭。日曆顯示2026年12月，25日為聖誕節，26日為聖誕節後第一個周日。"
	};
	var alt = altTexts[m] || ("公民教育委員會2026年年曆 " + m + "月");
	return '<img src="img/m' + m + '.webp" width="1000px" height="748px" alt="' + alt + '" title="' + alt + '">';
}
