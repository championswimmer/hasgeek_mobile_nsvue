"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Counter_1 = require("./Counter");
exports.default = {
    data() {
        return {
            surprise: false,
        };
    },
    template: `
    <Page class="page">
      <ActionBar class="action-bar" title="NativeScript-Vue"/>
  
      <StackLayout>
        <Counter />
      
        <Label class="p-20" textWrap=true text="This is a hello world application, tap the button if you dare"/>
      
        <Button class="btn btn-primary" @tap="surprise = !surprise" text="Tap me!"/>
        <Image v-if="surprise" class="m-20" src="~/images/NativeScript-Vue.png"/>
      </StackLayout>
    </Page>
  `,
    components: {
        Counter: Counter_1.default,
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsdUNBQStCO0FBRy9CLGtCQUFzQztJQUNwQyxJQUFJO1FBQ0YsT0FBTztZQUNMLFFBQVEsRUFBRSxLQUFLO1NBQ2hCLENBQUE7SUFDSCxDQUFDO0lBQ0QsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7O0dBYVQ7SUFDRCxVQUFVLEVBQUU7UUFDVixPQUFPLEVBQVAsaUJBQU87S0FDUjtDQUNGLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ291bnRlciBmcm9tICcuL0NvdW50ZXInXG5pbXBvcnQgVnVlLCB7Q29tcG9uZW50T3B0aW9uc30gZnJvbSAndnVlJ1xuXG5leHBvcnQgZGVmYXVsdCA8Q29tcG9uZW50T3B0aW9uczxhbnk+PntcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3VycHJpc2U6IGZhbHNlLFxuICAgIH1cbiAgfSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8UGFnZSBjbGFzcz1cInBhZ2VcIj5cbiAgICAgIDxBY3Rpb25CYXIgY2xhc3M9XCJhY3Rpb24tYmFyXCIgdGl0bGU9XCJOYXRpdmVTY3JpcHQtVnVlXCIvPlxuICBcbiAgICAgIDxTdGFja0xheW91dD5cbiAgICAgICAgPENvdW50ZXIgLz5cbiAgICAgIFxuICAgICAgICA8TGFiZWwgY2xhc3M9XCJwLTIwXCIgdGV4dFdyYXA9dHJ1ZSB0ZXh0PVwiVGhpcyBpcyBhIGhlbGxvIHdvcmxkIGFwcGxpY2F0aW9uLCB0YXAgdGhlIGJ1dHRvbiBpZiB5b3UgZGFyZVwiLz5cbiAgICAgIFxuICAgICAgICA8QnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgQHRhcD1cInN1cnByaXNlID0gIXN1cnByaXNlXCIgdGV4dD1cIlRhcCBtZSFcIi8+XG4gICAgICAgIDxJbWFnZSB2LWlmPVwic3VycHJpc2VcIiBjbGFzcz1cIm0tMjBcIiBzcmM9XCJ+L2ltYWdlcy9OYXRpdmVTY3JpcHQtVnVlLnBuZ1wiLz5cbiAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgPC9QYWdlPlxuICBgLFxuICBjb21wb25lbnRzOiB7XG4gICAgQ291bnRlcixcbiAgfSxcbn1cbiJdfQ==