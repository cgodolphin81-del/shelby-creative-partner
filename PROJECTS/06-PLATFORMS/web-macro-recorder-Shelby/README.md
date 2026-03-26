# Web Macro Recorder & Scheduler

**A complete record-and-replay system that watches your browser actions, saves them as a replayable workflow, extracts data into Excel, and runs on a schedule.**

## Project Structure
```
web_macro/
├── main.py           # CLI entry point
├── recorder.py       # Records your browser actions
├── player.py         # Replays workflows & extracts data
├── workflow.py       # Workflow data model & storage
├── excel_handler.py  # Excel read/write
├── scheduler.py      # Evening/scheduled runs
├── element_finder.py # Robust element locators
├── requirements.txt
└── workflows/        # Saved workflow JSON files (auto-created)
```

## Requirements
```txt
selenium>=4.15.0
openpyxl>=3.1.0
schedule>=1.2.0
python-dotenv>=1.0.0
```

## Usage

### Record a new workflow
```bash
python main.py record
python main.py record -n sales_report -u https://example.com
```

### Replay a workflow
```bash
python main.py play weekly_report
python main.py play weekly_report --headless
```

### Run scheduler
```bash
python main.py schedule
```

### List workflows
```bash
python main.py list
```

### Edit workflow
```bash
python main.py edit weekly_report
```

### Delete workflow
```bash
python main.py delete weekly_report
```

## Features

- ✅ Record browser actions with overlay UI
- ✅ Mark data for extraction
- ✅ Table auto-detection
- ✅ Pagination handling
- ✅ Excel export
- ✅ Scheduled runs
- ✅ Credential encryption
- ✅ Error screenshots

## Monetization

- Setup fee: $1,000-$3,000
- Monthly: $500-$2,000 per workflow
- Enterprise: $5K-$10K/month

---

*Source: Charmaine's archives*  
*Saved: March 20, 2026*
