#!/usr/bin/env node
import {program}  from 'commander';

program.description('Compares two configuration files and shows a difference.');
program.version('ds');
program.helpOption('-h, --help', 'output usage information');
program.parse();
