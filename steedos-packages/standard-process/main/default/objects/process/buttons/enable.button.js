/*
 * @Author: sunhaolin@hotoa.com
 * @Date: 2022-03-28 15:21:51
 * @LastEditors: sunhaolin@hotoa.com
 * @LastEditTime: 2022-03-31 19:01:51
 * @Description: 
 */
module.exports = {
    enable: function (object_name, record_id) {
        window.$(document.body).addClass('loading');
        let url = `/service/api/@steedos/standard-process/enable`;
        let options = {
            type: 'post',
            async: true,
            data: JSON.stringify({ _id: record_id }),
            success: function (data) {
                toastr.success('流程已启用。');
                SteedosUI.reloadRecord(object_name, record_id);
                FlowRouter.reload();
                window.$(document.body).removeClass('loading');
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                toastr.error(t(XMLHttpRequest.responseJSON.error))
                window.$(document.body).removeClass('loading');
            }
        };
        Steedos.authRequest(url, options);
    },
    enableVisible: function (object_name, record_id, permission, record) {
        return record && !record.is_active && !record.is_system;
    }
}