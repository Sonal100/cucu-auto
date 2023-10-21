import { ICustomWorld } from '../support/custom-world';
import { Given, When } from '@cucumber/cucumber';

Given('I am on the Google homepage', async function (this: ICustomWorld) {
  await this.page!.goto('https://www.google.com');
});

When(
  'I enter {string} in the search bar',
  async function (this: ICustomWorld, searchQuery: string) {
    await this.page!.getByLabel('Search', { exact: true }).fill(searchQuery);
  },
);

When('I click the "Google Search" button', async function (this: ICustomWorld) {
  await this.page!.getByRole('button', { name: 'Google Search' }).click();
});
