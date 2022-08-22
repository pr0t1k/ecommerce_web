import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: '98te6uds',
  dataset: 'production',
  apiVersion: '2022-03-10',
  useCdn: true,
  token: 'skn7JN6QyL6ymGA099qOpCD8HS7ZeJquGFyoeXfIrbcyZyDdV1bogt0nlIQgYxIrvf62Rw1A84ZgBxNnTVFf0PRNRtUIEtLNDrnkD6K4XR8l8mdnuyPV1OjtAQp5aS20MiY9zOBU10DYhYpARIszTDPpTyZ7Z0HtXwKtZxxG7rVeVH9mxcj0'
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);