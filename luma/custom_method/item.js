// frappe.ui.form.on("Item", "onload", function(frm){
// 	if(!cur_frm.doc.__islocal){
// 		frappe.call({
// 			method: "luma.custom_method.custom_method.get_general_enquiry",
// 			args: {
// 				item_code: frm.doc.item_code
// 			},
// 			callback: function(r) {
// 				frm.doc.sales_orders = frappe.render_template("sales_order_details", {
// 					"items": r.message.sales_orders,
// 				});
// 				cur_frm.refresh_fields();

// 				frm.doc.purchase_orders = frappe.render_template("purchase_order_details", {
// 					"items": r.message.purchase_orders,
// 				});
// 				cur_frm.refresh_fields();

// 				frm.doc.production_orders = frappe.render_template("production_order_details", {
// 					"items": r.message.production_orders,
// 				});
// 				cur_frm.refresh_fields();
// 			}
// 		});
// 	}	
// });

// frappe.ui.form.on("Item", {
// 	refresh: function(frm) {
// 		frm.fields_dict['outer_box_code'].get_query = function(doc) {
// 			return {
// 				filters: { "item_group": "Box"}
// 			}
// 		}
// 		frm.fields_dict['inner_box_code'].get_query = function(doc) {
// 			return {
// 				filters: { "item_group": "Box"}
// 			}
// 		}

// 	},
// });

// frappe.ui.form.on("Item", "item_group", function(frm){
// 	console.log("int Item ")
// 	if(cur_frm.doc.item_group != "Box"){
// 		cur_frm.set_df_property("outer_box_code","reqd",1)
// 		cur_frm.set_df_property("inner_box_code","reqd",1)
// 		cur_frm.set_df_property("outer_box_code","hidden",0)
// 		cur_frm.set_df_property("inner_box_code","hidden",0)
// 		cur_frm.set_df_property("outer_box_pcs","hidden",0)
// 		cur_frm.set_df_property("inner_box_pcs","hidden",0)
// 	}
// 	if(cur_frm.doc.item_group == "Box"){
// 		cur_frm.set_df_property("outer_box_code","reqd",0)
// 		cur_frm.set_df_property("inner_box_code","reqd",0)
// 		cur_frm.set_df_property("outer_box_code","hidden",1)
// 		cur_frm.set_df_property("inner_box_code","hidden",1)
// 		cur_frm.set_df_property("outer_box_pcs","hidden",1)
// 		cur_frm.set_df_property("inner_box_pcs","hidden",1)
// 	}
// })
