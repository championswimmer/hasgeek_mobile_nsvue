"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    data() {
        return {
            count: 42,
        };
    },
    computed: {
        message() {
            return this.count > 0
                ? `Tap tap tap! Only ${this.count} left!`
                : `Whoa! Slow down, we have hit the limit...`;
        },
    },
    template: `
    <StackLayout>
      <FlexboxLayout flexDirection="row" justifyContent="center">
        <Button @tap="decrement" text="-" class="btn btn-outline"/>
        <Label :text="count" alignSelf="baseline" class="h2"/>
        <Button @tap="increment" text="+" class="btn btn-outline"/>
      </FlexboxLayout>
      
      <Label class="p-20" :text="message"/>
    </StackLayout>
  `,
    methods: {
        increment() {
            this.count += 1;
        },
        decrement() {
            this.count -= 1;
        },
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ291bnRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkNvdW50ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxrQkFBc0M7SUFDcEMsSUFBSTtRQUNGLE9BQU87WUFDTCxLQUFLLEVBQUUsRUFBRTtTQUNWLENBQUM7SUFDSixDQUFDO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsT0FBTztZQUNMLE9BQU8sSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDO2dCQUNuQixDQUFDLENBQUMscUJBQXFCLElBQUksQ0FBQyxLQUFLLFFBQVE7Z0JBQ3pDLENBQUMsQ0FBQywyQ0FBMkMsQ0FBQztRQUNsRCxDQUFDO0tBQ0Y7SUFDRCxRQUFRLEVBQUU7Ozs7Ozs7Ozs7R0FVVDtJQUNELE9BQU8sRUFBRTtRQUNQLFNBQVM7WUFDUCxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQztRQUNsQixDQUFDO1FBQ0QsU0FBUztZQUNQLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDO1FBQ2xCLENBQUM7S0FDRjtDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudE9wdGlvbnN9IGZyb20gJ3Z1ZSdcblxuZXhwb3J0IGRlZmF1bHQgPENvbXBvbmVudE9wdGlvbnM8YW55Pj57XG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvdW50OiA0MixcbiAgICB9O1xuICB9LFxuICBjb21wdXRlZDoge1xuICAgIG1lc3NhZ2UoKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb3VudCA+IDBcbiAgICAgICAgPyBgVGFwIHRhcCB0YXAhIE9ubHkgJHt0aGlzLmNvdW50fSBsZWZ0IWBcbiAgICAgICAgOiBgV2hvYSEgU2xvdyBkb3duLCB3ZSBoYXZlIGhpdCB0aGUgbGltaXQuLi5gO1xuICAgIH0sXG4gIH0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPFN0YWNrTGF5b3V0PlxuICAgICAgPEZsZXhib3hMYXlvdXQgZmxleERpcmVjdGlvbj1cInJvd1wiIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCI+XG4gICAgICAgIDxCdXR0b24gQHRhcD1cImRlY3JlbWVudFwiIHRleHQ9XCItXCIgY2xhc3M9XCJidG4gYnRuLW91dGxpbmVcIi8+XG4gICAgICAgIDxMYWJlbCA6dGV4dD1cImNvdW50XCIgYWxpZ25TZWxmPVwiYmFzZWxpbmVcIiBjbGFzcz1cImgyXCIvPlxuICAgICAgICA8QnV0dG9uIEB0YXA9XCJpbmNyZW1lbnRcIiB0ZXh0PVwiK1wiIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lXCIvPlxuICAgICAgPC9GbGV4Ym94TGF5b3V0PlxuICAgICAgXG4gICAgICA8TGFiZWwgY2xhc3M9XCJwLTIwXCIgOnRleHQ9XCJtZXNzYWdlXCIvPlxuICAgIDwvU3RhY2tMYXlvdXQ+XG4gIGAsXG4gIG1ldGhvZHM6IHtcbiAgICBpbmNyZW1lbnQoKSB7XG4gICAgICB0aGlzLmNvdW50ICs9IDE7XG4gICAgfSxcbiAgICBkZWNyZW1lbnQoKSB7XG4gICAgICB0aGlzLmNvdW50IC09IDE7XG4gICAgfSxcbiAgfSxcbn07XG4iXX0=