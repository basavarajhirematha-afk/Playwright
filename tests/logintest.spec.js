
import {Login} from '../page/Login.spec';
import { test } from '@playwright/test';

test.skip('practice method', async ({ page }) => {
    const log=new Login(page);
    await log.openhrm();
});