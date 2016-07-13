'use strict';
var Page = require('astrolabe').Page;

module.exports = Page.create({
    url: {
        value: '/'
    },
    getPageTitle: {
        get: function () {
            return $('#header h1');
        }
    },
    getInboxText: {
        get: function () {
            return element(by.id('new-todo'));
        }
    },
    addTextList: {
        value: function (todoValue) {
            this.getInboxText.clear();
            this.getInboxText.sendKeys(todoValue);
        }
    },
    addTodoList: {
        value: function (todoValue) {
            this.addTextList(todoValue);
            this.getInboxText.sendKeys(protractor.Key.ENTER);
        }
    },
    getTodoList: {
        get: function () {
            return element.all(by.css("#todo-list li"));
        }
    },
    getTodoFirstList: {
        get: function () {
            return this.getTodoList.first();
        }
    },
    getTodoLastList: {
        get: function () {
            return this.getTodoList.last();
        }
    },
    getListByLabel: {
        get: function () {
            return this.getTodoLastList.element(by.tagName('label'));
//            return this.findElement(this.by.tagName('label'));
        }
    },
    getDeleteButtonClick: {
        get: function () {
            var elm = this.getTodoLastList.element(by.css('.destroy'));
            return browser.executeScript("arguments[0].click();", elm.getWebElement());
        }
    },
    getAllBoxChecked: {
        get: function () {
            return element(by.id('toggle-all')).click();
        }
    },
    getFirstChecked: {
        get: function () {
            return this.getTodoFirstList.element(by.css('.toggle')).click();
        }
    },
    getLastChecked: {
        get: function () {
            return this.getTodoLastList.element(by.css('.toggle')).click();
        }
    },
    getClass: {
        value: function (val) {
            return val.getAttribute('class');
        }

    },
    getClearCompleted: {
        get: function () {
            return element(by.id("clear-completed")).click();
        }
    },
    getTodoCheckedListCount: {
        get: function () {
            return  this.getTodoList.filter(function (elem1) {
                return elem1.element(by.css('.completed')).isPresent();
            }).count();
        }
    },
    getTodoListCount: {
        get: function () {
            return this.getTodoList.count();
        }
    }
});