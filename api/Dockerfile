FROM ruby:3.3.0

ARG RUBYGEMS_VERSION=3.4.6

RUN mkdir /api

WORKDIR /api

COPY src/Gemfile /api/Gemfile

COPY src/Gemfile.lock /api/Gemfile.lock

RUN gem update --system ${RUBYGEMS_VERSION} && \
    bundle install

COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]


CMD ["rails", "server", "-b", "0.0.0.0"]