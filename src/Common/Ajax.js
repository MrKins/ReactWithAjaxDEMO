/**
 * Created by mingk on 2017/8/28.
 */
import $ from "jquery";

export function AjaxGet(url, successResult, errorResult){
	$.ajax({
		url: url,
		dataType: 'json',
		cache: false,
		method : 'GET',
		success: successResult,
		error: errorResult
	});
}

export function AjaxPost(url, successResult, errorResult){
	$.ajax({
		url: url,
		dataType: 'json',
		cache: false,
		method : 'POST',
		success: successResult,
		error: errorResult
	});
}