import { Selector } from 'testcafe';

fixture `Local server test`
    .page `http://localhost:3000/`;

test('all integration test', async t => {
    await t
        .click(Selector('a').withText('Projects'))
        .expect(Selector('#root > div > div > main > div > section:nth-child(1) > div > b').innerText).contains('Merge Windows : A')
        .click(Selector('a').withText('Resume'))
        .expect(Selector('H1').withText('Henpai Hsu')).ok()
        .click(Selector('button').withText('Chinese'))
        .click(Selector('button').withText('English'))
        .click(Selector('a').withText('Notes'))
        .expect(Selector('ul').childNodeCount).gt(0, 'Dropbox return non-zero list')
        .click(Selector('a').withText('HomePage'))
        .click(Selector('[class^="ant-btn ant-btn-circle ant-btn-lg ant-btn-icon-onl"]'))
        .click(Selector('[class^="ant-btn ant-btn-circle ant-btn-lg ant-btn-icon-onl"]'))
        .click(Selector('#intergramRoot').find('div').find('div'))
        .click(Selector('div').withText('dreamfliper on telegram').nth(2).find('div').nth(1).find('svg'))
});
