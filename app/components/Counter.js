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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ291bnRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkNvdW50ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFPQSxrQkFBbUQ7SUFDakQsSUFBSTtRQUNGLE9BQU87WUFDTCxLQUFLLEVBQUUsRUFBRTtTQUNWLENBQUM7SUFDSixDQUFDO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsT0FBTztZQUNMLE9BQU8sSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDO2dCQUNuQixDQUFDLENBQUMscUJBQXFCLElBQUksQ0FBQyxLQUFLLFFBQVE7Z0JBQ3pDLENBQUMsQ0FBQywyQ0FBMkMsQ0FBQztRQUNsRCxDQUFDO0tBQ0Y7SUFDRCxRQUFRLEVBQUU7Ozs7Ozs7Ozs7R0FVVDtJQUNELE9BQU8sRUFBRTtRQUNQLFNBQVM7WUFDUCxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQztRQUNsQixDQUFDO1FBQ0QsU0FBUztZQUNQLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDO1FBQ2xCLENBQUM7S0FDRjtDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudE9wdGlvbnN9IGZyb20gJ3Z1ZSdcbmltcG9ydCBWdWUgZnJvbSAndnVlJ1xuXG5pbnRlcmZhY2UgQ291bnRlckNvbXBvbmVudCBleHRlbmRzIFZ1ZSB7XG4gIGNvdW50OiBudW1iZXJcbn1cblxuZXhwb3J0IGRlZmF1bHQgPENvbXBvbmVudE9wdGlvbnM8Q291bnRlckNvbXBvbmVudD4+e1xuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjb3VudDogNDIsXG4gICAgfTtcbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBtZXNzYWdlKCkge1xuICAgICAgcmV0dXJuIHRoaXMuY291bnQgPiAwXG4gICAgICAgID8gYFRhcCB0YXAgdGFwISBPbmx5ICR7dGhpcy5jb3VudH0gbGVmdCFgXG4gICAgICAgIDogYFdob2EhIFNsb3cgZG93biwgd2UgaGF2ZSBoaXQgdGhlIGxpbWl0Li4uYDtcbiAgICB9LFxuICB9LFxuICB0ZW1wbGF0ZTogYFxuICAgIDxTdGFja0xheW91dD5cbiAgICAgIDxGbGV4Ym94TGF5b3V0IGZsZXhEaXJlY3Rpb249XCJyb3dcIiBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiPlxuICAgICAgICA8QnV0dG9uIEB0YXA9XCJkZWNyZW1lbnRcIiB0ZXh0PVwiLVwiIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lXCIvPlxuICAgICAgICA8TGFiZWwgOnRleHQ9XCJjb3VudFwiIGFsaWduU2VsZj1cImJhc2VsaW5lXCIgY2xhc3M9XCJoMlwiLz5cbiAgICAgICAgPEJ1dHRvbiBAdGFwPVwiaW5jcmVtZW50XCIgdGV4dD1cIitcIiBjbGFzcz1cImJ0biBidG4tb3V0bGluZVwiLz5cbiAgICAgIDwvRmxleGJveExheW91dD5cbiAgICAgIFxuICAgICAgPExhYmVsIGNsYXNzPVwicC0yMFwiIDp0ZXh0PVwibWVzc2FnZVwiLz5cbiAgICA8L1N0YWNrTGF5b3V0PlxuICBgLFxuICBtZXRob2RzOiB7XG4gICAgaW5jcmVtZW50KCkge1xuICAgICAgdGhpcy5jb3VudCArPSAxO1xuICAgIH0sXG4gICAgZGVjcmVtZW50KCkge1xuICAgICAgdGhpcy5jb3VudCAtPSAxO1xuICAgIH0sXG4gIH0sXG59O1xuIl19