FROM loadimpact/k6

WORKDIR /k6

# make directory for k6 scripts results
RUN mkdir tests
RUN mkdir results

# RUN k6 login cloud -t LI_TOKEN
