
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/debugScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e1177/tmE1Ckr7NhUUrAxM7', 'debugScene');
// Scripts/debugScene.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.showLabel = null;
        return _this;
        // update (dt) {}
    }
    NewClass.prototype.onLoad = function () {
        cc.game.on("OptionButtonClick", this.onOptionButtonClick, this);
    };
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.onOptionButtonClick = function (btnIndex) {
        if (btnIndex == 0) {
            this.showLabel.string = "第一个";
        }
        if (btnIndex == 1) {
            this.showLabel.string = "第二个";
        }
        if (btnIndex == 2) {
            this.showLabel.string = "第三个";
        }
    };
    NewClass.prototype.onClickOne = function (event, param) {
        console.log("手动绑定第一个", param);
    };
    NewClass.prototype.onClickTwo = function (event, param) {
        console.log("手动绑定第二个", param);
    };
    NewClass.prototype.onClickThr = function (event, param) {
        console.log("手动绑定第三个", param);
    };
    __decorate([
        property({ type: cc.Label, tooltip: '' })
    ], NewClass.prototype, "showLabel", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9TY3JpcHRzL2Fzc2V0cy9TY3JpcHRzL2RlYnVnU2NlbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsa0JBQW1DLEVBQWxDLG9CQUFPLEVBQUUsc0JBQXlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFEbEQ7UUFBQSxxRUFzQ0M7UUFsQ0csZUFBUyxHQUFhLElBQUksQ0FBQzs7UUFpQzNCLGlCQUFpQjtJQUNyQixDQUFDO0lBaENhLHlCQUFNLEdBQWhCO1FBQ0ksRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsbUJBQW1CLEVBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFRCx3QkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELHNDQUFtQixHQUFuQixVQUFvQixRQUFRO1FBQ3hCLElBQUksUUFBUSxJQUFJLENBQUMsRUFBRTtZQUNmLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUNqQztRQUNELElBQUksUUFBUSxJQUFJLENBQUMsRUFBRTtZQUNmLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUNqQztRQUNELElBQUksUUFBUSxJQUFJLENBQUMsRUFBRTtZQUNmLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUNqQztJQUNMLENBQUM7SUFFRCw2QkFBVSxHQUFWLFVBQVcsS0FBSyxFQUFFLEtBQUs7UUFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELDZCQUFVLEdBQVYsVUFBVyxLQUFLLEVBQUUsS0FBSztRQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsNkJBQVUsR0FBVixVQUFXLEtBQUssRUFBRSxLQUFLO1FBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFoQ0Q7UUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUMsRUFBRSxDQUFDLEtBQUssRUFBQyxPQUFPLEVBQUMsRUFBRSxFQUFDLENBQUM7K0NBQ1Y7SUFIVixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBcUM1QjtJQUFELGVBQUM7Q0FyQ0QsQUFxQ0MsQ0FyQ3FDLEVBQUUsQ0FBQyxTQUFTLEdBcUNqRDtrQkFyQ29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uLy4uL2Fzc2V0cy9TY3JpcHRzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoe3R5cGU6Y2MuTGFiZWwsdG9vbHRpcDonJ30pXG4gICAgc2hvd0xhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQgeyAgICAgICAgXG4gICAgICAgIGNjLmdhbWUub24oXCJPcHRpb25CdXR0b25DbGlja1wiLHRoaXMub25PcHRpb25CdXR0b25DbGljayx0aGlzKTtcbiAgICB9XG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIFxuICAgIH1cblxuICAgIG9uT3B0aW9uQnV0dG9uQ2xpY2soYnRuSW5kZXgpIHtcbiAgICAgICAgaWYgKGJ0bkluZGV4ID09IDApIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd0xhYmVsLnN0cmluZyA9IFwi56ys5LiA5LiqXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJ0bkluZGV4ID09IDEpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd0xhYmVsLnN0cmluZyA9IFwi56ys5LqM5LiqXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJ0bkluZGV4ID09IDIpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd0xhYmVsLnN0cmluZyA9IFwi56ys5LiJ5LiqXCI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkNsaWNrT25lKGV2ZW50LCBwYXJhbSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIuaJi+WKqOe7keWumuesrOS4gOS4qlwiLCBwYXJhbSk7XG4gICAgfVxuXG4gICAgb25DbGlja1R3byhldmVudCwgcGFyYW0pIHtcbiAgICAgICAgY29uc29sZS5sb2coXCLmiYvliqjnu5HlrprnrKzkuozkuKpcIiwgcGFyYW0pO1xuICAgIH1cblxuICAgIG9uQ2xpY2tUaHIoZXZlbnQsIHBhcmFtKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi5omL5Yqo57uR5a6a56ys5LiJ5LiqXCIsIHBhcmFtKTtcbiAgICB9XG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==