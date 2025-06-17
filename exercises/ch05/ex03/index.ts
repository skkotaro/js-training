export type MonthType = "Jan" | "Feb" | "Mar" | "Apr" | "May" | "Jun" | "Jul" | "Aug" | "Sep" | "Oct" | "Nov" | "Dec";

// 列挙型のチェックの時は全ての値を列挙した方が丁寧
export class Month {
    checkDaysIfElse(month: MonthType): boolean {
        if (month === "Jan") {
            return true;
        } else if (month === "Mar") {
            return true;
        } else if (month === "May") {
            return true;
        } else if (month === "Jul") {
            return true;
        } else if (month === "Aug") {
            return true;
        } else if (month === "Oct") {
            return true;
        } else if (month === "Dec") {
            return true;
        } else {
            return false;
        }
    }
    checkDaysSwitch(month: MonthType): boolean {
        switch (month) {
            case "Jan":
            case "Mar":
            case "May":
            case "Jul":
            case "Aug":
            case "Oct":
            case "Dec":
                return true;
                break;
            default:
                return false;
                break;
        }
    }
}