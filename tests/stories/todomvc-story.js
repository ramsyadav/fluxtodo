var pageObj = require('../pages/todomvc-page');
describe('Todo-MVC : Layout Page', function () {
    beforeAll(function (){
        browser.ignoreSynchronization = true;
        pageObj.go(); 
    });

    it('should match url', function () {
        expect(pageObj.currentUrl).toBe(browser.getCurrentUrl());
        ;
    });

    it('should be checking for Title', function () {
        var pageTitle = pageObj.getPageTitle;
        expect(pageTitle.getText()).toBe('todos');

    });

    it('should be checking for text element present', function () {
        expect(pageObj.getInboxText.isPresent()).toBe(true);
    });

    it('should be checking for enter text in textbox element', function () {
        pageObj.addTextList("test 1");
        pageObj.getInboxText.getAttribute('value').then(function (value) {
            expect(value).toBe('test 1');
        });
    });
    it('should add todo list', function () {
        pageObj.addTodoList("todo1");
        expect(pageObj.getListByLabel.getText()).toBe("todo1");
        pageObj.addTodoList("todo2");
        expect(pageObj.getListByLabel.getText()).toBe("todo2");
        pageObj.addTodoList("todo3");
        expect(pageObj.getListByLabel.getText()).toBe("todo3");
        pageObj.addTodoList("todo4");
        expect(pageObj.getListByLabel.getText()).toBe("todo4");
        pageObj.addTodoList("todo5");
        expect(pageObj.getListByLabel.getText()).toBe("todo5");
    });

    it('should deleting option', function () {
        pageObj.getDeleteButtonClick;
        expect(pageObj.getTodoList.count()).toBe(4);
    });

    it('should check first option checkbox', function () {
        pageObj.getFirstChecked;
        expect(pageObj.getClass(pageObj.getTodoFirstList)).toBe('completed');
    });

    it('should check first option and delete', function () {
        var firstTodoBefore = pageObj.getTodoFirstList.element(by.tagName('label')).getText();
        pageObj.getClearCompleted;
        var firstTodoAfter = pageObj.getTodoFirstList.element(by.tagName('label')).getText();
        expect(firstTodoBefore).not.toBe(firstTodoAfter);
    });

    it('should check last option', function () {
        pageObj.getLastChecked;
        expect(pageObj.getClass(pageObj.getTodoLastList)).toBe('completed');
    });

    it('should check last option and delete', function () {
        var lastTodoBefore = pageObj.getTodoLastList.element(by.tagName('label')).getText();
        pageObj.getClearCompleted;
        var lastTodoAfter = pageObj.getTodoLastList.element(by.tagName('label')).getText();
        expect(lastTodoBefore).not.toBe(lastTodoAfter);
    });
    //
    it('should check all option', function () {
        pageObj.getAllBoxChecked;
        pageObj.getClearCompleted;
        expect(pageObj.getTodoListCount).toBe(0);
    });


//pageObj.getAllBoxChecked;console.log(pageObj.getTodoListCount +"  he");
//        expect(pageObj.getTodoListCount).toBe(pageObj.getTodoCheckedListCount);
//        pageObj.getClearCompleted;
//        expect(pageObj.getTodoListCount).toBe(0);
//        
//    it('Checking for checking last option and delete', function () {
//        var firstTodoBefore = pageObj.getTodoLastList.element(by.tagName('label')).getText();
//        pageObj.getClearCompleted;
//        var firstTodoAfter = pageObj.getTodoLastList.element(by.tagName('label')).getText();
//        expect(firstTodoBefore).not.toBe(firstTodoAfter);
//    });
});

