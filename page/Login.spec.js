export default class Login
{
    constructor(page)
   {
      this.page = page;
   }

   async openhrm()
   {
        await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
   }

   
}