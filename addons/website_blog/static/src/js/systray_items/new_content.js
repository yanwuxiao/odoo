/** @odoo-module **/

import { NewContentModal, MODULE_STATUS } from '@website/systray_items/new_content';
import { patch } from 'web.utils';

patch(NewContentModal.prototype, 'website_blog_new_content', {
    setup() {
        this._super();

        const newBlogElement = this.state.newContentElements.find(element => element.moduleXmlId === 'base.module_website_blog');
        newBlogElement.createNewContent = () => this.createNewBlogPost();
        newBlogElement.status = MODULE_STATUS.INSTALLED;
    },

    createNewBlogPost() {}
});
