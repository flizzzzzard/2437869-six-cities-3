#!/usr/bin/env node

import CliApplication from './app/cli.js';
import GenerateCommand from './cli/commands/generate.command.js';
import HelperCommand from './cli/commands/help.command.js';
import ImportCommand from './cli/commands/import.command.js';
import { VersionCommand } from './cli/index.js';

const myManager = new CliApplication();
myManager.registerCommands([new HelperCommand(), new VersionCommand(), new ImportCommand(), new GenerateCommand()]);
myManager.processCommand(process.argv);
