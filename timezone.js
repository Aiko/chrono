(function () {

  if (typeof chrono == 'undefined')
    throw 'Cannot find the chrono main module';

  chrono.timezoneMap = {
    "A": 60,
    "ACDT": 630,
    "ACST": 570,
    "ADT": -180,
    "AEDT": 660,
    "AEST": 600,
    "AFT": 270,
    "AKDT": -480,
    "AKST": -540,
    "ALMT": 360,
    "AMST": -180,
    "AMT": -240,
    "ANAST": 720,
    "ANAT": 720,
    "AQTT": 300,
    "ART": -180,
    "AST": -240,
    "AWDT": 540,
    "AWST": 480,
    "AZOST": 0,
    "AZOT": -60,
    "AZST": 300,
    "AZT": 240,
    "B": 120,
    "BNT": 480,
    "BOT": -240,
    "BRST": -120,
    "BRT": -180,
    "BST": 60,
    "BTT": 360,
    "C": 180,
    "CAST": 480,
    "CAT": 120,
    "CCT": 390,
    "CDT": -300,
    "CEST": 120,
    "CET": 60,
    "CHADT": 825,
    "CHAST": 765,
    "CKT": -600,
    "CLST": -180,
    "CLT": -240,
    "COT": -300,
    "CST": -360,
    "CVT": -60,
    "CXT": 420,
    "ChST": 600,
    "D": 240,
    "DAVT": 420,
    "E": 300,
    "EASST": -300,
    "EAST": -360,
    "EAT": 180,
    "ECT": -300,
    "EDT": -240,
    "EEST": 180,
    "EET": 120,
    "EGST": 0,
    "EGT": -60,
    "EST": -300,
    "ET": -300,
    "F": 360,
    "FJST": 780,
    "FJT": 720,
    "FKST": -180,
    "FKT": -240,
    "FNT": -120,
    "G": 420,
    "GALT": -360,
    "GAMT": -540,
    "GET": 240,
    "GFT": -180,
    "GILT": 720,
    "GMT": 0,
    "GST": 240,
    "GYT": -240,
    "H": 480,
    "HAA": -180,
    "HAC": -300,
    "HADT": -540,
    "HAE": -240,
    "HAP": -420,
    "HAR": -360,
    "HAST": -600,
    "HAT": -90,
    "HAY": -480,
    "HKT": 480,
    "HLV": -210,
    "HNA": -240,
    "HNC": -360,
    "HNE": -300,
    "HNP": -480,
    "HNR": -420,
    "HNT": -150,
    "HNY": -540,
    "HOVT": 420,
    "I": 540,
    "ICT": 420,
    "IDT": 180,
    "IOT": 360,
    "IRDT": 270,
    "IRKST": 540,
    "IRKT": 540,
    "IRST": 210,
    "IST": 60,
    "JST": 540,
    "K": 600,
    "KGT": 360,
    "KRAST": 480,
    "KRAT": 480,
    "KST": 540,
    "KUYT": 240,
    "L": 660,
    "LHDT": 660,
    "LHST": 630,
    "LINT": 840,
    "M": 720,
    "MAGST": 720,
    "MAGT": 720,
    "MART": -510,
    "MAWT": 300,
    "MDT": -360,
    "MESZ": 120,
    "MEZ": 60,
    "MHT": 720,
    "MMT": 390,
    "MSD": 240,
    "MSK": 240,
    "MST": -420,
    "MUT": 240,
    "MVT": 300,
    "MYT": 480,
    "N": -60,
    "NCT": 660,
    "NDT": -90,
    "NFT": 690,
    "NOVST": 420,
    "NOVT": 360,
    "NPT": 345,
    "NST": -150,
    "NUT": -660,
    "NZDT": 780,
    "NZST": 720,
    "O": -120,
    "OMSST": 420,
    "OMST": 420,
    "P": -180,
    "PDT": -420,
    "PET": -300,
    "PETST": 720,
    "PETT": 720,
    "PGT": 600,
    "PHOT": 780,
    "PHT": 480,
    "PKT": 300,
    "PMDT": -120,
    "PMST": -180,
    "PONT": 660,
    "PST": -480,
    "PT": -480,
    "PWT": 540,
    "PYST": -180,
    "PYT": -240,
    "Q": -240,
    "R": -300,
    "RET": 240,
    "S": -360,
    "SAMT": 240,
    "SAST": 120,
    "SBT": 660,
    "SCT": 240,
    "SGT": 480,
    "SRT": -180,
    "SST": -660,
    "T": -420,
    "TAHT": -600,
    "TFT": 300,
    "TJT": 300,
    "TKT": 780,
    "TLT": 540,
    "TMT": 300,
    "TVT": 720,
    "U": -480,
    "ULAT": 480,
    "UTC": 0,
    "UYST": -120,
    "UYT": -180,
    "UZT": 300,
    "V": -540,
    "VET": -210,
    "VLAST": 660,
    "VLAT": 660,
    "VUT": 660,
    "W": -600,
    "WAST": 120,
    "WAT": 60,
    "WEST": 60,
    "WESZ": 60,
    "WET": 0,
    "WEZ": 0,
    "WFT": 720,
    "WGST": -120,
    "WGT": -180,
    "WIB": 420,
    "WIT": 540,
    "WITA": 480,
    "WST": 780,
    "WT": 0,
    "X": -660,
    "Y": -720,
    "YAKST": 600,
    "YAKT": 600,
    "YAPT": 600,
    "YEKST": 360,
    "YEKT": 360,
    "Z": 0
  }

})();