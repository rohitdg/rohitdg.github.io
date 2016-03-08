$(document).ready(function(){

	$(".radio_set1").click(function(){
		$("#question_section_box1").hide("drop", { direction: "right" }, "slow");
		$("#question_section_box2").delay(600).show("drop", { direction: "left" }, "slow");

	});


	$("#optionsRadios2_2").click(function(){
		$("#question_section_box2").hide("drop", { direction: "right" }, "slow");
		$("#question_section_box3").delay(600).show("drop", { direction: "left" }, "slow");

	});


	$("#optionsRadios1_1").click(function() {
		$(".documents_list").append("<li>Deed </li>");
		$(".documents_list").append("<li>EC from the 1st deed till date</li>");
		$(".documents_list").append("<li>Patta </li>");
	});


	$("#optionsRadios3_1").click(function() {
		$(".documents_list").append("<li>Building Floor Plan Approval - by CMDA </li>");
		$(".documents_list").append("<li>Building Permit by Corporation</li>");
		$(".documents_list").append("<li>Planning permit by CMDA </li>");
	});

	$("#optionsRadios3_2").click(function() {
		$(".documents_list").append("<li>Completion Certificate - by CMDA </li>");
		$(".documents_list").append("<li>Electricity Bill</li>");
		$(".documents_list").append("<li>Water Tax Receipt  </li>");
		$(".documents_list").append("<li>Property Tax Receipt </li>");

	});


	$("#optionsRadios3_3").click(function() {
		$(".documents_list").append("<li> Joint Development Agreement</li>");
	});

	$("#optionsRadios3_4").click(function() {
		$(".documents_list").append("<li> Construction Agreement</li>");
		$(".documents_list").append("<li> Agreement of Sale</li>");
	});


});