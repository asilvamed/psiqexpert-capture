function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const p = e.parameter;

  sheet.appendRow([
    new Date(),
    p.nome,
    p.email,
    p.whatsapp,
    p.crm
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok' }))
    .setMimeType(ContentService.MimeType.JSON);
}
