const { exec } = require('child_process')
const { promisify } = require('util')
const inquirer = require('inquirer')
const chalk = require('chalk')

const execPromise = promisify(exec)
const STATUS_MESSAGE = [
  {
    type: 'confirm',
    name: 'status',
    message: 'Whether to continue, run git add：'
  }
]
const ADD_MESSAGE = [
  {
    type: 'confirm',
    name: 'add',
    message: 'Whether to continue, run git commit：'
  }
]
const COMMIT_MESSAGE = [
  {
    type: 'list',
    name: 'type',
    message: 'Place choose commit type：',
    choices: ['note', 'update', 'delete']
  },
  {
    type: 'input',
    name: 'problemNum',
    message: 'Place fill in problem number：'
  },
  {
    type: 'input',
    name: 'problemName',
    message: 'Place fill in problem title：'
  },
  {
    type: 'input',
    name: 'message',
    message: 'Place fill in commit message：'
  }
]
const consoleInfo = info => {
  if (info.stderr) {
    process.exit(1)
  }
  console.log(chalk.green.bold(info.stdout))
}

;(async () => {
  try {
    const status = await execPromise('git status')
    consoleInfo(status)
    const statusResult = await inquirer.prompt(STATUS_MESSAGE)
    if (!statusResult.status) {
      process.exit(0)
    }
    await execPromise('git add ./ ')
    const addResult = await inquirer.prompt(ADD_MESSAGE)
    if (!addResult.add) {
      process.exit(0)
    }
    const { type, problemNum, problemName, message } = await inquirer.prompt(
      COMMIT_MESSAGE
    )
    await execPromise(
      `git commit -m'${type}: 第${problemNum}题，题目：${problemName}；提交信息：${message}' `
    )
    console.log(chalk.green.bold('Successfully'))
  } catch (e) {
    process.exit(1)
    console.log(e.message)
  }
})()
