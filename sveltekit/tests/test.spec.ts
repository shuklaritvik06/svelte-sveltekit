import { expect, test } from '@playwright/test';

test.describe('Svelte App Tests', () => {
	test('Get API must return 4 length users', async ({ page }, testInfo) => {
		if (testInfo.retry > 0 && testInfo.retry <= 3) {
			console.log('Retrying');
		}
		const res = await page.goto('/api/get');
		const data = await res?.json();
		await test.info().attach('screenshot', {
			body: await page.screenshot(),
			contentType: 'image/png'
		});
		console.log(data.data);
		expect(data.data).toHaveLength(4);
	});

	test('Get API must return a  user', async ({ page }, testInfo) => {
		if (testInfo.retry > 0 && testInfo.retry <= 3) {
			console.log('Retrying');
		}
		const res = await page.goto('/api/get/1');
		const data = await res?.json();
		await test.info().attach('./screenshot', {
			body: await page.screenshot(),
			contentType: 'image/png'
		});
		console.log(data.data);
		expect(data.data).toHaveLength(1);
	});
});
