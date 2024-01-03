/* eslint-disable */
/**
 * Facilitates a load balancing mechanism to select the quicker download between China and US servers.
 * @param {Promise} chinaDownload - Promise representing the download from the China server.
 * @param {Promise} USDownload - Promise representing the download from the US server.
 * @returns {Promise} - A Promise that resolves to the faster download between China and US servers.
 */
export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload]);
}
