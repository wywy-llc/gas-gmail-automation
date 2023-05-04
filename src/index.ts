/**
 * メールを転送する。
 */
function sendEmails() {
  const message = searchMessages_('subject:AED');
  Logger.log(`メッセージ件数: ${message.length}`);
}
/**
 * メールを検索する。
 */
function searchMessages_(query: string): GoogleAppsScript.Gmail.GmailMessage[] {
  const threads = GmailApp.search(query);
  Logger.log(`スレッド件数: ${threads.length}`);
  if (threads.length === 0) {
    return [];
  }
  return threads.map(thread => thread.getMessages()).flat();
}
