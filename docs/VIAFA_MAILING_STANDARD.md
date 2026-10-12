# VIAFA Mailing Standard — Gmail HTML Campaigns

**Status:** Approved workflow, validated with WAMPEX 2027 on 12 October 2026.

## Mandatory rules

1. Preserve the approved campaign copy and design. Use responsive, table-based email HTML with inline CSS where possible.
2. Host all images on publicly accessible HTTPS URLs; check HTTP 200 and the appropriate `image/*` Content-Type.
3. Never create final HTML campaign drafts with the Gmail connector method that stripped `<img>` tags in the WAMPEX test. Do not assume any connector preserves raw HTML without verifying its actual output.
4. Create the test draft with **Google Apps Script `GmailApp.createDraft()`**, using the full original HTML in `htmlBody`. Read the HTML from the approved published source (such as the repository's raw GitHub URL).
5. Count `<img>` elements in the source and in the saved Gmail draft (`draft.getMessage().getBody()`). **Expected count is campaign-specific**; WAMPEX 2027 had 17 occurrences. If the counts differ, stop and investigate. A matching count alone does not prove images display correctly.
6. Open the draft in Gmail and visually inspect logos, hero, sector imagery, brochure, CTA and links on desktop and mobile. Check both the actual rendered images and the layout.
7. Do not send the test email without explicit authorization. Do not start a mail merge or mass mailing until a delivered test has been checked and explicitly approved.
8. Do not change source HTML merely to work around a draft connector that removes images; fix the creation path first.

## Google Apps Script template

Replace the constants for each campaign. Set EXPECTED_IMAGES based on the actual approved HTML, not always 17.

```javascript
function createCampaignTestDraft() {
  const HTML_URL = 'REPLACE_WITH_APPROVED_RAW_HTML_HTTPS_URL';
  const TO = 'REPLACE_WITH_TEST_RECIPIENT';
  const SUBJECT = 'REPLACE_WITH_APPROVED_SUBJECT';
  const EXPECTED_IMAGES = 0; // Set to actual count before running

  if (!HTML_URL.startsWith('https://') || EXPECTED_IMAGES < 1) {
    throw new Error('Set the approved HTTPS URL and image count first.');
  }
  const response = UrlFetchApp.fetch(HTML_URL, {muteHttpExceptions: true});
  if (response.getResponseCode() !== 200) {
    throw new Error('HTML fetch failed: HTTP ' + response.getResponseCode());
  }
  const html = response.getContentText('UTF-8');
  const sourceCount = (html.match(/<img\b/gi) || []).length;
  if (sourceCount !== EXPECTED_IMAGES) {
    throw new Error('Unexpected source image count: ' + sourceCount);
  }
  const plain = 'Please view this message in an HTML-capable email client.';
  const draft = GmailApp.createDraft(TO, SUBJECT, plain, {
    htmlBody: html,
    name: 'VIAFA'
  });
  const savedCount = (draft.getMessage().getBody().match(/<img\b/gi) || []).length;
  Logger.log('Source images: ' + sourceCount);
  Logger.log('Saved draft images: ' + savedCount);
  Logger.log('Draft ID: ' + draft.getId());
  if (savedCount !== sourceCount) {
    throw new Error('Draft created but image count differs. DO NOT SEND.');
  }
  Logger.log('Draft created, NOT SENT. Visually inspect in Gmail.');
}
```

## Ready-to-copy instruction for Claude

> **VIAFA MAILING STANDARD (MANDATORY).** Build the approved Gmail-compatible campaign HTML and publish all images to public HTTPS URLs. Check each image URL for HTTP 200 and correct MIME type. Do not create the campaign draft through the Gmail connector used in WAMPEX 2027; it removed all image tags. Instead prepare a Google Apps Script using `GmailApp.createDraft()` with the original HTML in `htmlBody`, sourced from the approved published file. Count `<img>` tags in source and saved draft and require equality, using the correct image count for THIS campaign (WAMPEX had 17; other campaigns may differ). Do not send. Have the user open the draft and visually inspect all images, links and mobile layout. Send a test only after explicit approval, and never run a mass mailing until the delivered test is approved. Preserve approved text and design.

## Reference case

WAMPEX 2027: approved HTML `email-campaigns/wampex-2027-mining/wampex-2027-mining-campaign.html`; original image count 17; Apps Script execution log showed source 17 and saved draft 17; user confirmed images appeared correctly in Gmail draft. This validates draft creation and draft rendering, **not yet final delivery or mass-mail merge**.
